import { useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";

export type OverflowMenuProps = {
  menuButtonLabel: string;
  id: string;
  menuItems: {
    id: string;
    label: string;
    url?: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  side: "right" | "left";
};

export function OverflowMenu({
  id,
  menuItems,
  side,
  menuButtonLabel,
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
        {menuButtonLabel}
        <Icon icon="more-vert"></Icon>
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
                <a href={item.url}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
