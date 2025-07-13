import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

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
      className={mergeStrings(
        `button button-${buttonType}`,
        xsFullWidth && "xs-full-width",
        loading && "spinner-active",
      )}
      {...props}
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
