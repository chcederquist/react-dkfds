import { Heading, HeadingProps } from "../Shared/Heading";

export type ToggleSwitchProps = {
  headingProps: HeadingProps;
  id: string;
  switches: {
    label: string;
    id: string;
    checked: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }[];
};

export function ToggleSwitch({
  id,
  switches,
  headingProps,
}: Readonly<ToggleSwitchProps>) {
  return (
    <div
      role="group"
      aria-labelledby={id + "-heading"}
      className="w-percent-100 w-percent-sm-60 w-percent-md-40"
    >
      <Heading {...headingProps}></Heading>
      {...switches.map((s) => (
        <button
          key={s.id}
          className="toggle-switch w-percent-100"
          type="button"
          role="switch"
          aria-checked={s.checked}
          onClick={s.onClick}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
