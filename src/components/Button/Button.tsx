import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { ComponentProps } from "react";

export type ButtonProps = {
  icon?: IconName;
  srLabel?: string;
  buttonType: "primary" | "secondary" | "tertiary" | "qauternary" | "unstyled";
} & ComponentProps<"button">;

export function Button({
  type,
  children,
  srLabel,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button className={`button button-${type}`} {...props}>
      {icon && <Icon icon={icon}></Icon>}
      {children}
      {srLabel && <span className="sr-only">{srLabel}</span>}
    </button>
  );
}
