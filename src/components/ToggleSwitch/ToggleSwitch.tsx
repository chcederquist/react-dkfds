import { ReactNode } from "react";

/**
 * Props for the ToggleSwitch component.
 *
 * @property {ReactNode} label - The label to display next to the toggle switch.
 * @property {string} id - The unique identifier for the toggle switch input element.
 * @property {boolean} checked - Indicates whether the toggle switch is in the "on" position.
 * @property {() => void} onSwitch - Callback function invoked when the toggle switch is toggled.
 */
export type ToggleSwitchProps = {
  label: ReactNode;
  id: string;
  checked: boolean;
  onSwitch: () => void;
};

/**
 * Renders a toggle switch button component.
 * https://designsystem.dk/komponenter/toggle/
 *
 * @param {Object} props - The properties for the ToggleSwitch component.
 * @param {string} props.label - The label to display on the switch.
 * @param {string} props.id - The unique identifier for the switch.
 * @param {boolean} props.checked - Indicates whether the switch is in the "on" position.
 * @param {() => void} props.onSwitch - Callback function invoked when the switch is toggled.
 *
 * @returns {JSX.Element} The rendered toggle switch button.
 */
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
