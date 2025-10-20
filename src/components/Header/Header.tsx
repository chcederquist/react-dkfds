import { ReactNode, useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";
import { InputField, InputFieldProps } from "../InputField/InputField";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";
import { OverflowMenu, OverflowMenuItem } from "../OverflowMenu/OverflowMenu";
import { useT } from "../../hooks/useT";
import { FunctionalLink } from "../FunctionalLink/FunctionalLink";

export type NavLinkProps = {
  label: string;
  url: string;
  current?: boolean;
  key: string | number;
};

export type NavigationItem = NavLinkProps & {
  subItems?: (NavLinkProps & { active: boolean })[];
  active: boolean;
  key: string | number;
};

export type HeaderProps = {
  texts: {
    authorityContactInfo: string;
    solutionName: string;
    authorityName: string;
    portalName: string;
    userName: string;
    organisationName?: string;
    logOffButton: string;
    goToPortalsFrontpage: string;
  };
  mobileMenuHeading: ReactNode;
  mobileMenuButtonLabel: ReactNode;
  navigationMenu?: {
    items: NavigationItem[];
    search?: InputFieldProps;
  };
  languagePickerProps?: {
    languages: (Omit<OverflowMenuItem, "id"> & {
      current?: boolean;
      languageTag: string;
    })[];
  };
  onLogOffClicked?: () => void;
};

function NavLink({ label, url, current }: Readonly<NavLinkProps>) {
  return (
    <a
      href={url}
      className="nav-link"
      aria-current={current ? "page" : undefined}
    >
      <span>{label}</span>
    </a>
  );
}

const getVisibleWidth = function (element: Element) {
  let width = 0;
  if (element.classList.contains("d-none")) {
    element.classList.remove("d-none");
    width = element.getBoundingClientRect().width;
    element.classList.add("d-none");
  } else {
    width = element.getBoundingClientRect().width;
  }
  return Math.ceil(width);
};

const updateMoreMenu = function () {
  const mainMenuItems = document.querySelectorAll(
    ".navigation-menu .mainmenu > li:not(.more-option)",
  );
  const moreMenu = document.querySelectorAll(
    ".navigation-menu .more-option",
  )[0];

  /* Calculate available space for main menu items */
  const menuWidth = Math.floor(
    document
      .querySelectorAll(".navigation-menu .navigation-menu-inner")[0]
      .getBoundingClientRect().width,
  );
  let searchWidth = 0;
  let paddingMoreMenu = 0;
  if (
    document.querySelectorAll(".navigation-menu.contains-search").length > 0
  ) {
    searchWidth = getVisibleWidth(
      document.querySelectorAll(".navigation-menu .search")[0],
    );
  } else {
    paddingMoreMenu = parseInt(
      window.getComputedStyle(
        document.querySelectorAll(
          ".navigation-menu .more-option .more-button",
        )[0],
      ).paddingRight,
    );
  }
  const containerPadding = parseInt(
    window.getComputedStyle(
      document.querySelectorAll(".navigation-menu .navigation-menu-inner")[0],
    ).paddingRight,
  );
  const availableSpace =
    menuWidth - searchWidth - containerPadding + paddingMoreMenu;

  /* Find the max amount of main menu items, it is possible to show */
  let widthNeeded = 0;
  for (let i = 0; i < mainMenuItems.length; i++) {
    widthNeeded = widthNeeded + getVisibleWidth(mainMenuItems[i]);
  }
  if (widthNeeded >= availableSpace) {
    widthNeeded += getVisibleWidth(moreMenu);
  }

  let i = mainMenuItems.length - 1;
  while (widthNeeded >= availableSpace) {
    widthNeeded -= getVisibleWidth(mainMenuItems[i]);
    i--;
  }
  return i + 1;
};

function NavigationMenu({
  search,
  items,
}: Readonly<NonNullable<HeaderProps["navigationMenu"]>>) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | undefined>();
  const [showOverflowMenu, setShowOverflowMenu] = useState(false);
  const [overflowIndex, setOverflowIndex] = useState<number>(items.length);
  const overflowItems = items.slice(overflowIndex);
  const t = useT();
  useEffect(() => {
    // Resizeobserver check if navigatio-menu overflows container
    const updateNavigationOverflow = () => {
      setOverflowIndex(updateMoreMenu());
    };

    // run once and on resize
    updateNavigationOverflow();
    window.addEventListener("resize", updateNavigationOverflow);
    return () => {
      window.removeEventListener("resize", updateNavigationOverflow);
    };
  }, []);
  return (
    <div
      className={mergeStrings("navigation-menu", search && "contains-search")}
    >
      <div className="navigation-menu-inner container">
        <nav
          className="nav"
          aria-label={
            t("header_navigation_menu_nav_aria_label", undefined) ?? "Hovedmenu"
          }
        >
          <ul className="mainmenu">
            {items.map((item, index) => (
              <li
                className={mergeStrings(
                  item.active && "current",
                  (item.active || item.subItems?.some((si) => si.active)) &&
                    "active",
                  index >= overflowIndex && "d-none",
                )}
                key={item.key}
              >
                {item.subItems ? (
                  <div className="submenu">
                    <button
                      className="button-overflow-menu js-dropdown"
                      onClick={() => {
                        setOpenMenuIndex((prevIndex) =>
                          prevIndex === index ? undefined : index,
                        );
                      }}
                      data-js-target={`desktopmenu-${index}`}
                      aria-expanded={openMenuIndex === index}
                      aria-controls={`desktopmenu-${index}`}
                    >
                      <span>{item.label}</span>
                    </button>
                    <div
                      className={mergeStrings(
                        "overflow-menu-inner",
                        index !== openMenuIndex && "collapsed",
                      )}
                      id={`desktopmenu-${index}`}
                      aria-hidden={openMenuIndex !== index ? "true" : "false"}
                    >
                      <ul className="overflow-list">
                        {item.subItems.map((subItem) => (
                          <li
                            key={subItem.key}
                            className={subItem.active ? "active current" : ""}
                          >
                            <NavLink
                              url={subItem.url}
                              label={subItem.label}
                              key={subItem.key}
                            ></NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    label={item.label}
                    url={item.url}
                    key={item.key}
                  ></NavLink>
                )}
              </li>
            ))}

            <li
              className={mergeStrings(
                "more-option",
                overflowItems.length === 0 && "d-none",
              )}
            >
              <div className="submenu">
                <button
                  className="more-button button-overflow-menu js-dropdown"
                  aria-controls="fds-more-menu"
                  aria-expanded={showOverflowMenu}
                  onClick={() => setShowOverflowMenu((prev) => !prev)}
                >
                  <span>
                    {t("header_overflow_menu_button_label", undefined) ??
                      "Mere"}
                  </span>
                </button>
                <div
                  className={mergeStrings(
                    "overflow-menu-inner",
                    !showOverflowMenu && "collapsed",
                  )}
                  id="fds-more-menu"
                >
                  <ul className="overflow-list">
                    {overflowItems.map((item) => (
                      <li
                        key={item.key}
                        className={mergeStrings(
                          item.active && "current",
                          (item.active ||
                            item.subItems?.some((si) => si.active)) &&
                            "active",
                        )}
                      >
                        {item.subItems ? (
                          <>
                            <span className="sub-title">{item.label}</span>
                            <ul aria-label={item.label}>
                              {item.subItems.map((subItem) => (
                                <li
                                  key={subItem.key}
                                  className={
                                    subItem.active ? "active current" : ""
                                  }
                                >
                                  <NavLink
                                    url={subItem.url}
                                    label={subItem.label}
                                    key={subItem.key}
                                  ></NavLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <NavLink
                            label={item.label}
                            url={item.url}
                            key={item.key}
                          ></NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {search && (
          <InputField
            {...search}
            labelProps={{
              ...search.labelProps,
              className: mergeStrings(search.labelProps?.className, "sr-only"),
              children: search.labelProps?.children ?? search.label,
            }}
            formGroupProps={{
              ...search.formGroupProps,
              className: mergeStrings(
                search.formGroupProps?.className,
                "form-group search",
              ),
            }}
          ></InputField>
        )}
      </div>
    </div>
  );
}

function NavigationMenuMobile({
  items,
}: Readonly<Omit<NonNullable<HeaderProps["navigationMenu"]>, "search">>) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | undefined>();
  const t = useT();
  return (
    <nav
      className="navigation-menu-mobile"
      aria-label={
        t("header_navigation_menu_nav_aria_label", undefined) ?? "Hovedmenu"
      }
    >
      <ul className="mainmenu">
        {items.map((item, index) => (
          <li
            className={mergeStrings(
              item.active && "current",
              (item.active || item.subItems?.some((si) => si.active)) &&
                "active",
            )}
            key={item.key}
          >
            {item.subItems ? (
              <div className="submenu">
                <button
                  className="button-mobile-menu js-menudropdown"
                  onClick={() => {
                    setOpenMenuIndex((prevIndex) =>
                      prevIndex === index ? undefined : index,
                    );
                  }}
                  data-js-target={`mobilemenu-${index}`}
                  aria-expanded={openMenuIndex === index}
                  aria-controls={`mobilemenu-${index}`}
                >
                  <span>{item.label}</span>
                </button>
                <div
                  className={mergeStrings(
                    "overflow-menu-inner",
                    index !== openMenuIndex && "collapsed",
                  )}
                  id={`mobilemenu-${index}`}
                  aria-hidden={openMenuIndex !== index ? "true" : "false"}
                >
                  <ul className="overflow-list">
                    {item.subItems.map((subItem) => (
                      <li
                        key={subItem.key}
                        className={subItem.active ? "active current" : ""}
                      >
                        <NavLink
                          url={subItem.url}
                          label={subItem.label}
                          key={subItem.key}
                        ></NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink
                label={item.label}
                url={item.url}
                key={item.key}
              ></NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function LanguageSwitcherHeader(
  languagePickerProps: NonNullable<HeaderProps["languagePickerProps"]>,
) {
  return (
    <div className="language-switcher-header">
      <div className="container">
        <OverflowMenu
          side={"right"}
          isLanguageList={true}
          overflowMenuProps={{
            style: {
              left: "auto",
              right: "0",
            },
          }}
          id="overflow-language-picker"
          menuItems={languagePickerProps.languages
            .sort((a, b) => (a.current ? -1 : b.current ? 1 : 0))
            .map((lang) => ({
              ...lang,
              id: lang.languageTag,
            }))}
        >
          {" "}
          <Icon icon="language"></Icon>
          {languagePickerProps.languages.find((lang) => lang.current)?.label}
        </OverflowMenu>
      </div>
    </div>
  );
}

function LanguageSwitcherMobile(
  languagePickerProps: NonNullable<HeaderProps["languagePickerProps"]>,
) {
  const t = useT();
  return (
    <div className="language-switcher-mobile">
      <h3>
        {t("header_language_switcher_selected_language_heading", undefined) ??
          "Valgt sprog"}
      </h3>
      <ul>
        {languagePickerProps?.languages
          .sort((a, b) => (a.current ? -1 : b.current ? 1 : 0)) // Current language first
          .map((language) => (
            <li key={language.languageTag}>
              <a
                href={language.href}
                lang={language.languageTag}
                aria-label={language.ariaLabel}
              >
                {language.current ? <Icon icon="check"></Icon> : null}
                {language.label}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export function Header({
  texts,
  navigationMenu,
  languagePickerProps,
  onLogOffClicked,
  mobileMenuHeading,
  mobileMenuButtonLabel,
}: Readonly<HeaderProps>) {
  const t = useT();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    // TODO: Resize-observer should close mobile menu when above mobile breakpoint
    const handleResize = () => {
      if (window.innerWidth > 991 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    // TODO: Handle mutations as well as initial load
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  useEffect(() => {
    if (
      isMobileMenuOpen &&
      !document.body.classList.contains("mobile-nav-active")
    ) {
      document.body.classList.add("mobile-nav-active");
    } else if (
      !isMobileMenuOpen &&
      document.body.classList.contains("mobile-nav-active")
    ) {
      document.body.classList.remove("mobile-nav-active");
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      {languagePickerProps && (
        <LanguageSwitcherHeader {...languagePickerProps} />
      )}
      <div className="portal-info">
        <div className="portal-info-inner container">
          <a
            href="#"
            title={texts.goToPortalsFrontpage}
            aria-label={texts.portalName}
            className="logo"
          >
            <span>{texts.portalName}</span>
          </a>
          <FunctionalLink
            as="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-haspopup="dialog"
            className="button-menu-open js-menu-open ml-auto d-print-none"
          >
            <Icon icon="menu"></Icon>
            {mobileMenuButtonLabel}
          </FunctionalLink>

          <div className="portal-user">
            <p className="user">
              {texts.userName}
              {texts.organisationName ? `, ${texts.organisationName}` : ""}
            </p>
            <FunctionalLink
              as="button"
              className="d-print-none log-off"
              onClick={() => onLogOffClicked?.()}
            >
              <Icon icon="lock"></Icon>
              {texts.logOffButton}
            </FunctionalLink>
          </div>
        </div>
      </div>
      <div className="solution-info">
        <div className="solution-info-inner container">
          <div className="solution-heading">
            <a href="#">{texts.solutionName}</a>
          </div>

          <div className="additional-info">
            <p>
              <strong className="authority-name">{texts.authorityName}</strong>
            </p>

            <p>{texts.authorityContactInfo}</p>
          </div>
        </div>
      </div>
      {navigationMenu && <NavigationMenu {...navigationMenu} />}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={mergeStrings("overlay", isMobileMenuOpen && "is-visible")}
      ></div>
      <div
        className={mergeStrings(
          "mobile-drawer",
          isMobileMenuOpen && "is-visible",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-heading"
      >
        <div className="menu-top">
          <h2 id="menu-heading" className="menu-heading">
            {mobileMenuHeading}
          </h2>
          <button
            className="function-link button-menu-close js-menu-close"
            aria-label={t(
              "header_mobile_drawer_menu_close_button_aria_label",
              undefined,
            )}
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            <Icon icon="close"></Icon>
            {t("header_mobile_drawer_menu_close_button_label", undefined)}
          </button>
        </div>
        {navigationMenu && <NavigationMenuMobile {...navigationMenu} />}
        <div className="solution-info-mobile">
          <ScreenReaderLabel as="h3">
            {t(
              "header_solution_info_mobile_authority_screen_reader_label",
              undefined,
            )}
          </ScreenReaderLabel>

          <p className="mb-2">
            <strong className="authority-name">{texts.authorityName}</strong>
          </p>

          <p>{texts.authorityContactInfo}</p>
        </div>
        {languagePickerProps && (
          <LanguageSwitcherMobile {...languagePickerProps} />
        )}
        <div className="portal-info-mobile">
          <ScreenReaderLabel as={"h3"}>
            {t(
              "header_portal_info_mobile_screen_reader_label_user",
              undefined,
            ) ?? "Bruger"}
          </ScreenReaderLabel>

          <p className="user">
            <span className="mb-3">{texts.userName}</span>
            {texts.organisationName && <span>{texts.organisationName}</span>}
          </p>

          <p>
            <FunctionalLink
              as="button"
              onClick={() => onLogOffClicked?.()}
              className="d-print-none log-off"
            >
              <Icon icon="lock"></Icon>
              {texts.logOffButton}
            </FunctionalLink>
          </p>
        </div>
      </div>
    </header>
  );
}
