import { ReactNode } from "react";

export function Badge({ content, size, type }: Readonly<{content: ReactNode; size: 'small' | 'large'; type?: 'info' | 'success' | 'warning' | 'error';}>) {
  return (
    <span className={`badge badge-${size} ${type ? `badge-${type}` : ''}`}>
      {content}
    </span>
  );
}