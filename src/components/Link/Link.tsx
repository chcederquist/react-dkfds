import { ComponentProps } from "react";
import { Icon, IconProps } from "../Shared/Icon";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the `Link` component.
 *
 * Extends all standard anchor (`<a>`) element props and adds an optional `iconProps` property
 * for customizing the icon displayed within the link.
 *
 * @property iconProps - Optional properties to configure the icon shown in the link.
 */
export type LinkProps = ComponentProps<"a"> & { iconProps?: IconProps };

/**
 * Renders a customizable anchor (`<a>`) element with optional icon support.
 *
 * @param iconProps - Props to pass to the `Icon` component. If provided, an icon will be rendered alongside the link content.
 * @param props - Standard anchor element props and children.
 * @returns A React anchor element with optional icon.
 */
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
