import { ReactNode } from "react";

export type BadgeProps = {
  children: ReactNode;
  type?: "info" | "success" | "warning" | "error";
};

export function Badge({ children, type }: Readonly<BadgeProps>) {
  return (
    <span className={`badge ${type ? `badge-${type}` : ""}`}>{children}</span>
  );
}
