import { mergeStrings } from "../../util/merge-classnames";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { HTMLElementType, ReactNode } from "react";
import { useT } from "../../hooks/useT";

/**
 * Props for the Alert component.
 *
 * @property type - Specifies the alert type. Can be "info", "success", "warning", or "error".
 * @property id - Optional unique identifier for the alert element.
 * @property iconAriaLabel - Optional accessible label for the alert icon.
 * @property children - Optional content to be displayed inside the alert.
 * @property heading - Optional heading configuration for the alert.
 */
export type AlertProps = {
  type: "info" | "success" | "warning" | "error";
  id?: string;
  iconAriaLabel?: string;
  children?: ReactNode;
  heading?: HeadingProps;
  alertTextAs?: HTMLElementType;
};

/**
 * Renders an alert component with a specified type, icon, heading, and content.
 * https://designsystem.dk/komponenter/beskeder/
 * @param {Readonly<AlertProps>} props - The properties for the Alert component.
 * @param {'info' | 'success' | 'warning' | 'error'} props.type - The type of alert to display, which determines the icon and styling.
 * @param {string} [props.iconAriaLabel] - Optional aria-label for the alert icon. If not provided, a default label based on the alert type is used.
 * @param {React.ReactNode} props.children - The content to display inside the alert.
 * @param {HeadingProps} [props.heading] - Optional heading to display at the top of the alert.
 * @param {string} [props.id] - Optional id for the alert container.
 *
 * @returns {JSX.Element} The rendered alert component.
 */
export function Alert({
  type,
  iconAriaLabel,
  children,
  heading,
  id,
  alertTextAs: AlertTextAs = "p",
}: Readonly<AlertProps>) {
  const t = useT();
  const _iconAriaLabel =
    iconAriaLabel ??
    (type === "info"
      ? (t("alert_icon_aria_label_info", undefined) ?? "Information")
      : type === "success"
        ? (t("alert_icon_aria_label_success", undefined) ?? "Succes")
        : type === "warning"
          ? (t("alert_icon_aria_label_warning", undefined) ?? "Advarsel")
          : (t("alert_icon_aria_label_error", undefined) ?? "Fejl"));
  const iconName = type satisfies IconName;
  return (
    <div className={`alert alert-${type}`} id={id}>
      <Icon
        icon={iconName}
        isAlertIcon
        svgProps={{ "aria-label": _iconAriaLabel }}
      ></Icon>
      <div className="alert-body">
        {heading && (
          <Heading
            {...heading}
            className={mergeStrings("alert-heading", heading?.className)}
          />
        )}
        <AlertTextAs className="alert-text">{children}</AlertTextAs>
      </div>
    </div>
  );
}
