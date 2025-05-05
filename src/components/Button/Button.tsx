import { ReactNode } from "react";

export function Button({type, children, srLabel, icon }: Readonly<{icon: string; srLabel: string; type: 'primary' | 'secondary' | 'tertiary' | 'qauternary' | 'unstyled'; children: ReactNode}>) {
  return (
    <button className={`button button-${type}`}>
      <svg className="icon-svg" focusable="false" aria-hidden="true"><use xlinkHref={`#${icon}`}></use></svg>
      {children}
      {srLabel && <span className="sr-only">{srLabel}</span>}
    </button>
  );
}