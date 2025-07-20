import { ComponentProps, ReactNode } from "react";
import { HTMLSelectPropsWithRequiredFields } from "../../types/html-props";
import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

/**
 * Props for the `Dropdown` component.
 *
 * @property selectProps - Props for the underlying `<select>` element. Must include "id" and "name" fields.
 * @property options - Array of option objects for the dropdown, each containing `value`, `key`, and `text`.
 * @property formGroupProps - Optional props for the wrapping `<div>` element.
 * @property error - Optional error message to display.
 * @property hint - Optional hint text to display.
 *
 * @property label - Label content for the dropdown. Required if `labelProps` is omitted.
 * @property labelProps - Props for the `<label>` element. Required if `label` is optional.
 */
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

/**
 * Renders a styled dropdown (select) component with label, hint, and error message support.
 * https://designsystem.dk/komponenter/dropdown/
 *
 * @param formGroupProps - Additional props for the outer form group container.
 * @param selectProps - Props for the underlying `<select>` element, including `id`.
 * @param labelProps - Props for the `<label>` element.
 * @param label - The label text for the dropdown. If not provided, uses `labelProps.children`.
 * @param error - Error message to display below the dropdown. Adds error styling.
 * @param hint - Optional hint text displayed below the label.
 * @param options - Array of option objects to render in the dropdown. Each option should have `key`, `value`, and `text`.
 *
 * @returns A dropdown component with accessibility features for hints and errors.
 */
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
