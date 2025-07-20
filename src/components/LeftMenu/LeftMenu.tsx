import { ReactElement, ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the LeftMenu component.
 *
 * @property {string} [ariaLabel] - Optional ARIA label for accessibility purposes.
 * @property {ReactElement<LeftMenuItemProps> | ReactElement<LeftMenuItemProps>[]} children - One or more LeftMenuItem components to be rendered within the menu.
 */
export type LeftMenuProps = {
  ariaLabel?: string;
  children: ReactElement<LeftMenuItemProps> | ReactElement<LeftMenuItemProps>[];
};

/**
 * Renders a navigation menu with an accessible aria-label.
 * https://designsystem.dk/komponenter/venstremenu/
 *
 * @param ariaLabel - The accessible label for the navigation element.
 * @param children - The menu items to be rendered inside the menu.
 *
 * @returns A navigation element containing the provided menu items.
 */
export function LeftMenu({ ariaLabel, children }: Readonly<LeftMenuProps>) {
  return (
    <nav aria-label={ariaLabel}>
      <LeftMenuItemList>{children}</LeftMenuItemList>
    </nav>
  );
}

function LeftMenuItemList({
  children,
}: {
  children: LeftMenuProps["children"];
}) {
  return <ul className="sidemenu">{children}</ul>;
}
export type LeftMenuItemProps = {
  url: string;
  title: ReactNode;
  information?: ReactNode;
  current?: boolean;
  active?: boolean;
  children?:
    | ReactElement<LeftMenuItemProps>
    | ReactElement<LeftMenuItemProps>[];
};
export function LeftMenuItem({
  information,
  url,
  title,
  children,
  current,
  active,
}: LeftMenuItemProps) {
  return (
    <li className={mergeStrings(active && "active", current && "current")}>
      <a
        href={url}
        className="nav-link"
        aria-current={current ? "page" : undefined}
      >
        <div>
          <span>{title}</span>
          {information && (
            <span className="sidenav-information">{information}</span>
          )}
        </div>
      </a>
      {children && <LeftMenuItemList>{children}</LeftMenuItemList>}
    </li>
  );
}
