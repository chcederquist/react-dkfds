import { ReactNode } from "react";

/**
 * Props for the Badge component.
 *
 * @property children - The content to be displayed inside the badge.
 * @property type - The visual style of the badge. Can be "info", "success", "warning", or "error".
 */
export type BadgeProps = {
  children: ReactNode;
  type?: "info" | "success" | "warning" | "error";
};

/**
 * Renders a badge element with optional type styling.
 * https://designsystem.dk/komponenter/badges/
 * @param children - The content to display inside the badge.
 * @param type - Optional type of the badge, which determines its styling (e.g., "success", "warning", "error").
 * @returns A styled `<span>` element containing the badge content.
 */
export function Badge({ children, type }: Readonly<BadgeProps>) {
  return (
    <span className={`badge ${type ? `badge-${type}` : ""}`}>{children}</span>
  );
}
