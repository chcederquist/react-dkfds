import { ReactNode, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";

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
