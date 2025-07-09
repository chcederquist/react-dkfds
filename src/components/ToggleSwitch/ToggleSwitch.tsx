import { ReactNode } from "react";

export type ToggleSwitchProps = {
  label: ReactNode;
  id: string;
  checked: boolean;
  onSwitch: () => void;
};

export function ToggleSwitch({
  label,
  id,
  checked,
  onSwitch,
}: Readonly<ToggleSwitchProps>) {
  return (
    <button
      key={id}
      className="toggle-switch w-percent-100"
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => {
        onSwitch();
      }}
    >
      {label}
    </button>
  );
}
