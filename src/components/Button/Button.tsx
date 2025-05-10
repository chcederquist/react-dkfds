import { ReactNode } from "react";
import { Icon, IconName } from "../Shared/Icon";

export type ButtonProps = {icon: IconName; srLabel: string; type: 'primary' | 'secondary' | 'tertiary' | 'qauternary' | 'unstyled'; children: ReactNode};

export function Button({type, children, srLabel, icon }: Readonly<ButtonProps>) {
  return (
    <button className={`button button-${type}`}>
      <Icon icon={icon}></Icon>
      {children}
      {srLabel && <span className="sr-only">{srLabel}</span>}
    </button>
  );
}