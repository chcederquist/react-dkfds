import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { ComponentProps } from "react";

export type ButtonProps = {
  icon?: IconName;
  srLabel?: string;
  buttonType: "primary" | "secondary" | "tertiary" | "unstyled" | "warning";
} & ComponentProps<"button">;

export function Button({
  buttonType,
  children,
  srLabel,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button className={`button button-${buttonType}`} {...props}>
      {icon && <Icon icon={icon}></Icon>}
      <span>{children}</span>
      {srLabel && <span className="sr-only">{srLabel}</span>}
    </button>
  );
}
