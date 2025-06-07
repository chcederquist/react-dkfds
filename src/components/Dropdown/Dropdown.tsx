import { ComponentProps } from "react";
import { HTMLSelectPropsWithRequiredFields } from "../../types/html-props";
import { mergeStrings } from "../../util/merge-classnames";

export type DropdownProps = {
  labelProps: ComponentProps<"label">;
  selectProps: HTMLSelectPropsWithRequiredFields<"id" | "name">;
  options: { value: string; key: string; text: string }[];
  formGroupProps?: ComponentProps<"div">;
  error?: string;
  hint?: string;
};
export function Dropdown({
  formGroupProps,
  selectProps,
  labelProps,
  error,
  hint,
  options,
}: Readonly<DropdownProps>) {
  return (
    <div className="form-group" {...formGroupProps}>
      <label
        className="form-label"
        htmlFor={selectProps.id}
        {...labelProps}
      ></label>
      {hint && (
        <span className="form-hint" id={selectProps.id + "-hint"}>
          {hint}
        </span>
      )}
      {error && (
        <span className="form-error-message" id={selectProps.id + "-error"}>
          <span className="sr-only">{error}</span>
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
