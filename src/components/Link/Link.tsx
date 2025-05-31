import { ComponentProps } from "react";
import { Icon, IconProps } from "../Shared/Icon";
import { mergeStrings } from "../../util/merge-classnames";

export type LinkProps = ComponentProps<"a"> & { iconProps?: IconProps };
export function Link({ iconProps, ...props }: LinkProps) {
  return (
    <a
      {...props}
      className={mergeStrings(props.className, iconProps && "icon-link")}
    >
      {props.children}
      {iconProps && <Icon {...iconProps}></Icon>}
    </a>
  );
}
