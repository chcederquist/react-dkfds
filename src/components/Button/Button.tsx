import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

/**
 * Props for the Button component.
 *
 * @property {IconName} [icon] - Optional icon to display within the button.
 * @property {string} [srLabel] - Optional screen reader label for accessibility.
 * @property {"primary" | "secondary" | "tertiary" | "unstyled" | "warning" | "icon-only"} buttonType - Specifies the visual style of the button.
 * @property {boolean} [xsFullWidth] - If true, the button will take full width on extra small screens.
 * @property {boolean} [loading] - If true, displays a loading indicator and disables the button.
 * @property {ComponentProps<"button">} - Inherits all standard button element props.
 */
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
  loading?: boolean;
} & ComponentProps<"button">;

/**
 * Renders a customizable button component with optional icon, loading spinner, and screen reader label.
 * https://designsystem.dk/komponenter/knapper/
 *
 * @param buttonType - Specifies the visual style of the button (e.g., "primary", "secondary").
 * @param children - The content to be displayed inside the button.
 * @param srLabel - Optional label for screen readers to improve accessibility.
 * @param icon - Optional icon to display alongside the button content.
 * @param xsFullWidth - If true, the button will span the full width on extra small screens.
 * @param loading - If true, displays a loading spinner and hides the button content visually.
 * @param props - Additional props to be passed to the underlying `<button>` element.
 *
 * @returns A styled button element with support for icons, loading state, and accessibility features.
 */
export function Button({
  buttonType,
  children,
  srLabel,
  icon,
  xsFullWidth,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={mergeStrings(
        `button button-${buttonType}`,
        xsFullWidth && "xs-full-width",
        loading && "spinner-active",
        props.className,
      )}
    >
      {loading ? (
        <>
          <LoadingSpinner
            size="small"
            light={buttonType === "primary"}
          ></LoadingSpinner>
          <span className="text-hidden">{children}</span>
          {srLabel && <ScreenReaderLabel>{srLabel}</ScreenReaderLabel>}
        </>
      ) : (
        <>
          {icon && <Icon icon={icon}></Icon>}
          <span>{children}</span>
          {srLabel && <ScreenReaderLabel>{srLabel}</ScreenReaderLabel>}
        </>
      )}
    </button>
  );
}
