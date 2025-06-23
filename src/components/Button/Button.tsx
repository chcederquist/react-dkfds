import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type ButtonProps = {
  icon?: IconName;
  srLabel?: string;
  buttonType:
    | "primary"
    | "secondary"
    | "tertiary"
    | "unstyled"
    | "warning"
    | "icon-only";
  xsFullWidth?: boolean;
} & ComponentProps<"button">;

export function Button({
  buttonType,
  children,
  srLabel,
  icon,
  xsFullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={mergeStrings(
        `button button-${buttonType}`,
        xsFullWidth && "xs-full-width",
      )}
      {...props}
    >
      {icon && <Icon icon={icon}></Icon>}
      <span>{children}</span>
      {srLabel && <span className="sr-only">{srLabel}</span>}
    </button>
  );
}
