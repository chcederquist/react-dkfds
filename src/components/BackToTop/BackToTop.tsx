import { useEffect, useRef, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

function getViewportHeight() {
  return Math.max(
    window.innerHeight ?? 0,
    document.documentElement.clientHeight ?? 0,
  );
}

function getPageHeight() {
  const docBody = document.body;
  const docElem = document.documentElement;
  return Math.max(
    docBody.scrollHeight,
    docBody.offsetHeight,
    docBody.getBoundingClientRect().height,
    docElem.scrollHeight,
    docElem.offsetHeight,
    docElem.getBoundingClientRect().height,
    docElem.clientHeight,
  );
}

function isFooterVisible() {
  const rect = document
    .getElementsByTagName("footer")[0]
    ?.querySelector(".footer")
    ?.getBoundingClientRect();
  return rect
    ? rect.top < window.innerHeight ||
        rect.top < document.documentElement.clientHeight
    : false;
}

export function BackToTop() {
  const [heightOfViewport, setHeightOfViewport] = useState(getViewportHeight());
  const [pageHeight, setPageHeight] = useState(getPageHeight());
  const aRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.target !== aRef.current) {
          const header = document.querySelector<HTMLElement>("header.header");
          if (header === null || !header.contains(mutation.target)) {
            setHeightOfViewport(getViewportHeight());
            setPageHeight(getPageHeight());
          }
        }
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeOldValue: false,
      characterData: true,
      characterDataOldValue: false,
      childList: true,
      subtree: true,
    });
    const listenerCallback = () => {
      setHeightOfViewport(getViewportHeight());
      setPageHeight(getPageHeight());
    };
    window.addEventListener("scroll", listenerCallback);
    window.addEventListener("resize", listenerCallback);
    window.addEventListener("load", listenerCallback);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", listenerCallback);
      window.removeEventListener("resize", listenerCallback);
      window.removeEventListener("load", listenerCallback);
    };
  });
  const limit = heightOfViewport * 2;
  let footerSticky = false;
  if (window.scrollY >= limit) {
    if (isFooterVisible()) {
      footerSticky = true;
    }
  } else {
    let maybeShowButton = false;

    // Check whether the page has a sidenav (left menu or step guide)
    const sidenav = document.querySelector<HTMLElement>(".sidemenu");

    if (sidenav?.offsetParent !== null) {
      // If the sidenav is responsive, ensure that it is not collapsed
      const sidenavContainer = sidenav?.closest(".overflow-menu-inner");
      if (sidenavContainer?.getAttribute("aria-hidden") === "false") {
        // Check that the sidenav was not opened from an overflow menu
        const overflowMenu =
          sidenavContainer.previousElementSibling as HTMLElement | null;
        if (overflowMenu?.offsetParent !== null) {
          maybeShowButton = true;
        }
      } else {
        maybeShowButton = true;
      }
    }

    if (!maybeShowButton) {
      footerSticky = true;
    } else {
      const rect = sidenav?.getBoundingClientRect();
      // If the sidenav isn't visible, check where to place the button
      if (rect && rect.bottom < 0) {
        footerSticky = isFooterVisible();
      }
      // If the sidenav is visible and the scroll threshold hasn't been met, place the button at the footer
      else {
        footerSticky = true;
      }
    }
  }
  return (
    <a
      ref={aRef}
      className={mergeStrings(
        "button back-to-top-button d-print-none",
        limit > pageHeight ? "d-none" : null,
        footerSticky ? "footer-sticky" : null,
      )}
      href="#top"
    >
      <Icon icon="arrow-upward" />
      <ScreenReaderLabel>Til toppen af siden</ScreenReaderLabel>
      <span className="d-none d-md-inline-block" aria-hidden="true">
        Til toppen
      </span>
    </a>
  );
}
