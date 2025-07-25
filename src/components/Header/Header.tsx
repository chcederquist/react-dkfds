import { useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";
import { InputField, InputFieldProps } from "../InputField/InputField";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

export type NavLinkProps = {
  label: string;
  url: string;
};

export type NavigationItem = NavLinkProps & {
  subItems?: (NavLinkProps & { active: boolean })[];
  active: boolean;
};

export type HeaderProps = {
  texts: {
    authorityContactInfo: string;
    solutionName: string;
    authorityName: string;
    portalName: string;
    userName: string;
    organisationName: string;
    logOffButton: string;
    goToPortalsFrontpage: string;
  };
  navigationMenu?: { items: NavigationItem[]; search?: InputFieldProps };
};

function NavLink({ label, url }: Readonly<NavLinkProps>) {
  return (
    <a href={url} className="nav-link">
      <span>{label}</span>
    </a>
  );
}

function NavigationMenu({
  search,
  items,
}: Readonly<NonNullable<HeaderProps["navigationMenu"]>>) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | undefined>();
  return (
    <div
      className={mergeStrings("navigation-menu", search && "contains-search")}
    >
      <div className="navigation-menu-inner container">
        <nav className="nav" aria-label="Hovedmenu">
          <ul className="mainmenu">
            {items.map((item, index) => (
              <li
                className={mergeStrings(
                  item.active && "current",
                  (item.active || item.subItems?.some((si) => si.active)) &&
                    "active",
                )}
                key={item.url || item.label}
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
                    ></button>
                    <div
                      className={mergeStrings(
                        "overflow-menu-inner",
                        index === openMenuIndex && "collapsed",
                      )}
                      id={`desktopmenu-${index}`}
                      aria-hidden={openMenuIndex !== index ? "true" : "false"}
                    >
                      <ul className="overflow-list">
                        {item.subItems.map((subItem) => (
                          <li
                            key={subItem.url || subItem.label}
                            className={subItem.active ? "active current" : ""}
                          >
                            <NavLink
                              url={subItem.url}
                              label={subItem.label}
                            ></NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink label={item.label} url={item.url}></NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {search && <InputField {...search}></InputField>}
      </div>
    </div>
  );
}

function NavigationMenuMobile({
  items,
}: Readonly<Omit<NonNullable<HeaderProps["navigationMenu"]>, "search">>) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | undefined>();
  return (
    <nav className="navigation-menu-mobile" aria-label="Hovedmenu">
      <ul className="mainmenu">
        {items.map((item, index) => (
          <li
            className={mergeStrings(
              item.active && "current",
              (item.active || item.subItems?.some((si) => si.active)) &&
                "active",
            )}
            key={item.url || item.label}
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
                ></button>
                <div
                  className={mergeStrings(
                    "overflow-menu-inner",
                    index === openMenuIndex && "collapsed",
                  )}
                  id={`mobilemenu-${index}`}
                  aria-hidden={openMenuIndex !== index ? "true" : "false"}
                >
                  <ul className="overflow-list">
                    {item.subItems.map((subItem) => (
                      <li
                        key={subItem.url || subItem.label}
                        className={subItem.active ? "active current" : ""}
                      >
                        <NavLink
                          url={subItem.url}
                          label={subItem.label}
                        ></NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink label={item.label} url={item.url}></NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Header({ texts, navigationMenu }: Readonly<HeaderProps>) {
  // TODO: Resize-observer should close mobile menu when above mobile breakpoint
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          <button
            className="function-link button-menu-open js-menu-open ml-auto d-print-none"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-haspopup="dialog"
          >
            <Icon icon="menu"></Icon>Menu
          </button>

          <div className="portal-user">
            <p className="user">
              {texts.userName}
              {texts.organisationName ? `, ${texts.organisationName}` : ""}
            </p>
            <button className="function-link d-print-none log-off">
              <Icon icon="lock"></Icon>
              {texts.logOffButton}
            </button>
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
            Menu
          </h2>
          <button
            className="function-link button-menu-close js-menu-close"
            aria-label="Luk menu"
          >
            <Icon icon="close"></Icon>Luk
          </button>
        </div>
        {navigationMenu && <NavigationMenuMobile {...navigationMenu} />}
        <div className="solution-info-mobile">
          <ScreenReaderLabel as="h3">Myndighed</ScreenReaderLabel>

          <p className="mb-2">
            <strong className="authority-name">{texts.authorityName}</strong>
          </p>

          <p>{texts.authorityContactInfo}</p>
        </div>
        <div className="portal-info-mobile">
          <ScreenReaderLabel as={"h3"}>Bruger</ScreenReaderLabel>

          <p className="user">
            <span className="mb-3">{texts.userName}</span>
            {texts.organisationName && <span>{texts.organisationName}</span>}
          </p>

          <p>
            <button className="function-link d-print-none log-off">
              <Icon icon="lock"></Icon>Log af
            </button>
          </p>
        </div>
      </div>
    </header>
  );
}
