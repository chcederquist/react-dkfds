import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputFieldProps, InputField } from "../InputField/InputField";

export type RadioButtonsProps = {
  legendProps: ComponentProps<"legend">;
  fieldsetProps?: ComponentProps<"fieldset">;
  options: {
    value: string;
    id: string;
    inputProps?: ComponentProps<"input">;
    checked?: boolean;
    label: string;
    hiddenInputField?: InputFieldProps;
  }[];
  id: string;
  hint?: string;
  error?: string;
  name: string;
};

export function RadioButtons({
  fieldsetProps,
  hint,
  id,
  legendProps,
  error,
  options,
  name,
}: Readonly<RadioButtonsProps>) {
  return (
    <div className={mergeStrings("form-group", error && "form-error")}>
      <fieldset
        aria-describedby={mergeStrings(
          hint && id + "-hint",
          error && id + "-error",
        )}
        {...fieldsetProps}
      >
        <legend className="form-label" {...legendProps}></legend>
        {hint && (
          <span className="form-hint" id={id + "-hint"}>
            {hint}
          </span>
        )}
        {error && (
          <span className="form-error-message" id={id + "-error"}>
            <span className="sr-only">Fejl: </span>
            {error}
          </span>
        )}
        {options &&
          options.map((option) => (
            <>
              <div className="form-group-radio" key={option.id}>
                <input
                  type="radio"
                  name={name}
                  className="form-radio"
                  id={option.id}
                  checked={option.checked}
                  {...option.inputProps}
                />
                <label className="form-label" htmlFor={option.id}>
                  {option.label}
                </label>
              </div>
              {option.hiddenInputField && option.checked && (
                <div id={option.id + "-collapse"} className="radio-content">
                  <InputField {...option.hiddenInputField}></InputField>
                </div>
              )}
            </>
          ))}
      </fieldset>
    </div>
  );
}
