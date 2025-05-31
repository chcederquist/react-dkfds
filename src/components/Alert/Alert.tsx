import { mergeStrings } from "../../util/merge-classnames";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { ReactNode } from "react";

export type AlertProps = {
  type: "info" | "success" | "warning" | "error";
  id?: string;
  iconAriaLabel?: string;
  children?: ReactNode;
  heading?: HeadingProps;
};

export function Alert({
  type,
  iconAriaLabel,
  children,
  heading,
  id,
}: Readonly<AlertProps>) {
  const _iconAriaLabel =
    iconAriaLabel ??
    (type === "info"
      ? "Information"
      : type === "success"
        ? "Succes"
        : type === "warning"
          ? "Advarsel"
          : "Fejl");
  const iconName: IconName =
    type === "info"
      ? "info"
      : type === "success"
        ? "check-circle"
        : type === "warning"
          ? "report-problem"
          : "highlight-off";
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
        <p className="alert-text">{children}</p>
      </div>
    </div>
  );
}
