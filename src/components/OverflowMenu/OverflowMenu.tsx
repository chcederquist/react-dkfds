import { ReactNode, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";

/**
 * Props for the `OverflowMenu` component.
 *
 * @property id - Unique identifier for the menu.
 * @property menuItems - Array of menu item objects, each containing:
 *   - id: Unique identifier for the menu item.
 *   - label: Display text for the menu item.
 *   - href: Optional link URL for the menu item.
 *   - action: Optional click handler for the menu item.
 * @property side - Position of the menu relative to its trigger ("right" or "left").
 *
 * The component accepts either:
 * - A `label` prop (with no `children`), or
 * - `children` (with no `label`).
 */
export type OverflowMenuProps = {
  id: string;
  menuItems: {
    id: string;
    label: string;
    href?: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  side: "right" | "left";
} & (
  | {
      label: string;
      children?: undefined;
    }
  | { children: ReactNode; label?: undefined }
);

/**
 * Renders an overflow menu component with a toggle button and a list of menu items.
 * The menu can be expanded or collapsed, and supports both button and anchor menu items.
 * https://designsystem.dk/komponenter/overflowmenu/
 *
 * @param id - The unique identifier for the menu, used for accessibility attributes.
 * @param menuItems - An array of menu item objects, each containing an `id`, `label`, and either an `action` (button) or `href` (anchor).
 * @param side - The side on which the menu opens (e.g., "left" or "right").
 * @param props - Additional props, including an optional `label` for the button or `children` to render custom content.
 *
 * @remarks
 * - The menu closes and opens when the toggle button is clicked.
 * - Accessibility attributes (`aria-expanded`, `aria-controls`) are applied for better screen reader support.
 * - TODO: Implement closing the menu when clicking outside of it.
 */
export function OverflowMenu({
  id,
  menuItems,
  side,
  ...props
}: Readonly<OverflowMenuProps>) {
  const [expanded, setExpanded] = useState(false); // TODO: Close on click outside
  return (
    <div
      className={mergeStrings("overflow-menu", `overflow-menu--open-${side}`)}
    >
      <button
        className="button-overflow-menu js-dropdown"
        data-js-target={id}
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded(!expanded)}
      >
        {"label" in props ? (
          <>
            {props.label}
            <Icon icon="more-vert"></Icon>
          </>
        ) : (
          props.children
        )}
      </button>
      <div
        className={mergeStrings(
          "overflow-menu-inner",
          expanded ? "" : "collapsed",
        )}
        id={id}
      >
        <ul className="overflow-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.action ? (
                <button onClick={item.action}>{item.label}</button>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export type OverflowMenuSortProps = {
  id: string;
  label: string;

  menuItems: {
    id: string;
    label: string;
    isCurrent?: boolean;
    action: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  side: "right" | "left";
};

export function OverflowMenuSort({
  id,
  menuItems,
  side,
  ...props
}: Readonly<OverflowMenuSortProps>) {
  const [expanded, setExpanded] = useState(false); // TODO: Close on click outside
  return (
    <div
      className={mergeStrings(
        "overflow-menu",
        `overflow-menu--open-${side}`,
        "overflow-menu--sort",
      )}
    >
      <button
        className="button-overflow-menu js-dropdown"
        data-js-target={id}
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded(!expanded)}
      >
        <Icon icon="sort-default"></Icon>
        {props.label}:{" "}
        <span className="selected-value">
          {menuItems.find((item) => item.isCurrent)?.label}
        </span>
      </button>
      <div
        className={mergeStrings(
          "overflow-menu-inner",
          expanded ? "" : "collapsed",
        )}
        id={id}
      >
        <ul className="overflow-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button onClick={item.action} aria-current={item.isCurrent}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
