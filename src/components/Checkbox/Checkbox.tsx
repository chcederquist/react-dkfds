import { ComponentProps, ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

/**
 * Props for the Checkbox component.
 *
 * @property fieldsetProps - Additional props for the fieldset element wrapping the checkboxes.
 * @property onChange - Callback function called when a checkbox value changes. Receives the value and checked state.
 * @property options - Array of checkbox option objects.
 * @property options.value - The value of the checkbox input.
 * @property options.id - Unique identifier for the checkbox input.
 * @property options.inputProps - Additional props for the checkbox input element.
 * @property options.checked - Whether the checkbox is checked by default.
 * @property options.label - The label displayed next to the checkbox.
 * @property options.hint - Optional hint text for the checkbox.
 * @property options.hiddenContent - Optional content shown when the checkbox is checked.
 * @property id - Unique identifier for the checkbox group.
 * @property hint - Optional hint text for the checkbox group.
 * @property error - Optional error message for the checkbox group.
 * @property name - Name attribute for the checkbox inputs.
 * @property legendProps - Additional props for the legend element.
 * @property label - Label for the checkbox group legend.
 */
export type CheckboxProps = {
  fieldsetProps?: ComponentProps<"fieldset">;
  onChange?: (value: string, checked: boolean) => void;
  options: {
    value: string;
    id: string;
    inputProps?: ComponentProps<"input">;
    checked?: boolean;
    label: ReactNode;
    hint?: string;
    hiddenContent?: ReactNode;
  }[];
  id: string;
  hint?: string;
  error?: string;
  name: string;
  legendProps?: ComponentProps<"legend">;
  label?: ReactNode;
};

/**
 * Renders a group of checkboxes with optional hint, error message, and hidden content per option.
 * https://designsystem.dk/komponenter/tjekboks/
 *
 * @param fieldsetProps - Additional props for the fieldset element.
 * @param hint - Optional hint text displayed above the checkboxes.
 * @param id - Unique identifier for the checkbox group.
 * @param label - Label for the checkbox group, used as the legend if `legendProps.children` is not provided.
 * @param legendProps - Additional props for the legend element.
 * @param error - Optional error message displayed below the hint.
 * @param onChange - Callback invoked when a checkbox is toggled. Receives the option value and checked state.
 * @param options - Array of checkbox options to render. Each option can include label, hint, checked state, inputProps, and hiddenContent.
 * @param name - Name attribute for all checkboxes in the group.
 *
 * @returns A React element representing a group of checkboxes with accessibility features.
 */
export function Checkbox({
  fieldsetProps,
  hint,
  id,
  label,
  legendProps,
  error,
  onChange,
  options,
  name,
}: Readonly<CheckboxProps>) {
  return (
    <div className={mergeStrings("form-group", error && "form-error")}>
      <fieldset
        aria-describedby={mergeStrings(
          hint && id + "-hint",
          error && id + "-error",
        )}
        {...fieldsetProps}
      >
        <legend className="form-label" {...legendProps}>
          {legendProps?.children ?? label}
        </legend>
        {hint && (
          <span className="form-hint" id={id + "-hint"}>
            {hint}
          </span>
        )}
        {error && (
          <span className="form-error-message" id={id + "-error"}>
            <ScreenReaderLabel>Fejl: </ScreenReaderLabel>
            {error}
          </span>
        )}
        {options &&
          options.map((option) => {
            const CheckboxContainer = () => (
              <>
                <div className="form-group-checkbox" key={option.id}>
                  <input
                    type="checkbox"
                    name={name}
                    className="form-checkbox"
                    id={option.id}
                    checked={option.checked}
                    aria-describedby={
                      option.hint ? option.id + "-hint" : undefined
                    }
                    {...option.inputProps}
                    onChange={(ev) => {
                      onChange?.(option.value, ev.target.checked);
                      option.inputProps?.onChange?.(ev);
                    }}
                  />
                  <label className="form-label" htmlFor={option.id}>
                    {option.label}
                  </label>
                  {option.hint && (
                    <span className="form-hint" id={option.id + "-hint"}>
                      {option.hint}
                    </span>
                  )}
                </div>
                {option.hiddenContent && option.checked && (
                  <div
                    id={option.id + "-collapse"}
                    className="checkbox-content"
                  >
                    {option.hiddenContent}
                  </div>
                )}
              </>
            );

            return option.hiddenContent ? (
              <div
                className={mergeStrings(
                  "hidden-content-wrapper",
                  option.checked && "show-content",
                )}
              >
                <CheckboxContainer />
              </div>
            ) : (
              <CheckboxContainer />
            );
          })}
      </fieldset>
    </div>
  );
}
