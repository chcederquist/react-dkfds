import { ComponentProps, ReactNode } from "react";
import { HTMLSelectPropsWithRequiredFields } from "../../types/html-props";
import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

export type DropdownProps = {
  selectProps: HTMLSelectPropsWithRequiredFields<"id" | "name">;
  options: { value: string; key: string; text: string }[];
  formGroupProps?: ComponentProps<"div">;
  error?: string;
  hint?: string;
} & (
  | {
      label?: ReactNode;
      labelProps: ComponentProps<"label">;
    }
  | { label: ReactNode; labelProps?: ComponentProps<"label"> }
);
export function Dropdown({
  formGroupProps,
  selectProps,
  labelProps,
  label,
  error,
  hint,
  options,
}: Readonly<DropdownProps>) {
  return (
    <div
      className={mergeStrings("form-group", error && "form-error")}
      {...formGroupProps}
    >
      <label className="form-label" htmlFor={selectProps.id} {...labelProps}>
        {label ?? labelProps?.children}
      </label>
      {hint && (
        <span className="form-hint" id={selectProps.id + "-hint"}>
          {hint}
        </span>
      )}
      {error && (
        <span className="form-error-message" id={selectProps.id + "-error"}>
          <ScreenReaderLabel>Fejl:</ScreenReaderLabel>
          {error}
        </span>
      )}
      <select
        className="form-select"
        aria-describedby={mergeStrings(
          error && selectProps.id + "-error",
          hint && selectProps.id + "-hint",
        )}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
