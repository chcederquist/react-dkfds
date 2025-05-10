import { ReactNode } from "react";

export type BadgeProps = {content: ReactNode; size: 'small' | 'large'; type?: 'info' | 'success' | 'warning' | 'error';}

export function Badge({ content, size, type }: Readonly<BadgeProps>) {
  return (
    <span className={`badge badge-${size} ${type ? `badge-${type}` : ''}`}>
      {content}
    </span>
  );
}