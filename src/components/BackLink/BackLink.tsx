import { ComponentProps } from "react";
import { Icon } from "../Shared/Icon";
import { mergeStrings } from "../../util/merge-classnames";

export function BackLink(props: ComponentProps<"a">) {
  return (
    <a {...props} className={mergeStrings("back-link", props.className)}>
      <Icon icon="chevron-left"></Icon>
      {props.children}
    </a>
  );
}
