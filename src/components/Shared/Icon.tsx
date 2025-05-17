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
      className={mergeStrings("icon-svg", isAlertIcon && "alert-icon")}
      focusable="false"
      aria-hidden="true"
      {...svgProps}
    >
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
}
