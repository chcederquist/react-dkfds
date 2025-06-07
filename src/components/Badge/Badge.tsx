import { ReactNode } from "react";

export type BadgeProps = {
  children: ReactNode;
  size: "small" | "large";
  type?: "info" | "success" | "warning" | "error";
};

export function Badge({ children, size, type }: Readonly<BadgeProps>) {
  return (
    <span className={`badge badge-${size} ${type ? `badge-${type}` : ""}`}>
      {children}
    </span>
  );
}
