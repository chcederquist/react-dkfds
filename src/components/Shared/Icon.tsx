import { IconName } from "../../types/icon-names";
import { mergeStrings } from "../../util/merge-classnames";

export type IconProps = {
  icon: IconName;
  isAlertIcon?: boolean;
  svgProps?: React.SVGProps<SVGSVGElement>;
};
export function Icon({ icon, isAlertIcon, svgProps }: Readonly<IconProps>) {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      {...svgProps}
      className={mergeStrings(
        "icon-svg",
        isAlertIcon && "alert-icon",
        svgProps?.className,
      )}
    >
      <use href={`#${icon}`}></use>
    </svg>
  );
}
