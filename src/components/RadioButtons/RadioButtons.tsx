import { ComponentProps, ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";
import { useT } from "../../hooks/useT";

/**
 * Props for the `RadioButtons` component.
 *
 * @property {ComponentProps<"fieldset">} [fieldsetProps] - Additional props for the fieldset element.
 * @property {(value: string) => void} [onChange] - Callback invoked when the selected radio button changes.
 * @property {Array} options - Array of radio button options.
 * @property {string} options.value - Value of the radio button.
 * @property {string} options.id - Unique ID for the radio button.
 * @property {ComponentProps<"input">} [options.inputProps] - Additional props for the input element.
 * @property {boolean} [options.checked] - Whether the radio button is checked.
 * @property {ReactNode} options.label - Label for the radio button.
 * @property {string} [options.hint] - Optional hint text for the radio button.
 * @property {ReactNode} [options.hiddenContent] - Optional content shown when the radio button is selected.
 * @property {string} id - Unique ID for the radio button group.
 * @property {string} [hint] - Optional hint text for the radio button group.
 * @property {string} [error] - Optional error message for the radio button group.
 * @property {string} name - Name attribute for the radio button group.
 * @property {ComponentProps<"legend">} legendProps - Props for the legend element (required if `label` is not provided).
 * @property {ReactNode} [label] - Label for the radio button group (required if `legendProps` is not provided).
 */
export type RadioButtonsProps = {
  fieldsetProps?: ComponentProps<"fieldset">;
  onChange?: (value: string) => void;
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
} & (
  | {
      legendProps: ComponentProps<"legend">;
      label?: undefined;
    }
  | {
      legendProps?: undefined;
      label: ReactNode;
    }
);

/**
 * Renders a group of radio buttons with optional hint, error message, and collapsible hidden content.
 * https://designsystem.dk/komponenter/radioknap/
 *
 * @param fieldsetProps - Additional props to spread onto the `<fieldset>` element.
 * @param hint - Optional hint text displayed above the radio buttons.
 * @param id - Unique identifier used for accessibility attributes.
 * @param legendProps - Additional props to spread onto the `<legend>` element.
 * @param error - Optional error message displayed below the radio buttons.
 * @param onChange - Callback invoked when a radio button is selected, receiving the selected value.
 * @param options - Array of radio button options, each containing label, value, checked state, and optional hint, inputProps, and hiddenContent.
 * @param name - Name attribute for the radio button group.
 * @param label - Label text for the radio button group, used as a fallback if `legendProps.children` is not provided.
 *
 * @remarks
 * - Displays hint and error messages with appropriate ARIA attributes for accessibility.
 * - Supports rendering additional content when a radio option with `hiddenContent` is selected.
 * - Uses `mergeStrings` utility to conditionally apply CSS classes.
 */
export function RadioButtons({
  fieldsetProps,
  hint,
  id,
  legendProps,
  error,
  onChange,
  options,
  name,
  label,
}: Readonly<RadioButtonsProps>) {
  const t = useT();
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
            <ScreenReaderLabel>
              {t("form_element_error_message_prefix_sr_label", {
                error,
                inputType: "radio",
              }) ?? "Fejl: "}
            </ScreenReaderLabel>
            {error}
          </span>
        )}
        {options &&
          options.map((option) => {
            const RadioContainer = () => (
              <>
                <div className="form-group-radio">
                  <input
                    type="radio"
                    name={name}
                    className="form-radio"
                    id={option.id}
                    checked={option.checked}
                    aria-describedby={
                      option.hint ? option.id + "-hint" : undefined
                    }
                    {...option.inputProps}
                    onChange={(ev) => {
                      onChange?.(option.value);
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
                  <div id={option.id + "-collapse"} className="radio-content">
                    {option.hiddenContent}
                  </div>
                )}
              </>
            );

            return option.hiddenContent ? (
              <div
                key={option.id}
                className={mergeStrings(
                  "hidden-content-wrapper",
                  option.checked && "show-content",
                )}
              >
                <RadioContainer />
              </div>
            ) : (
              <RadioContainer key={option.id} />
            );
          })}
      </fieldset>
    </div>
  );
}
