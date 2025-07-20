import { ComponentProps } from "react";
import { Icon } from "../Shared/Icon";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Renders a styled anchor element with a left chevron icon, typically used as a "Back" navigation link.
 * https://designsystem.dk/komponenter/tilbage-link/
 * @param props - Props for the anchor element, including children and className.
 * @returns The back link component with icon and children.
 */
export function BackLink(props: ComponentProps<"a">) {
  return (
    <a {...props} className={mergeStrings("back-link", props.className)}>
      <Icon icon="chevron-left"></Icon>
      {props.children}
    </a>
  );
}
