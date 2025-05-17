import {
  HTMLElementProps,
  HTMLInputPropsWithRequiredFields,
} from "../../types/html-props";
import { mergeStrings } from "../../util/merge-classnames";
import { InputFieldProps, InputField } from "../InputField/InputField";

export type RadioButtonsProps = {
  legendProps: HTMLElementProps<HTMLLegendElement>;
  fieldsetProps: HTMLElementProps<HTMLFieldSetElement>;
  values: {
    inputProps: HTMLInputPropsWithRequiredFields<"value" | "id">;
    label: string;
    hint?: string;
    hiddenInputField?: InputFieldProps;
  }[];
  id: string;
  hint?: string;
  errorMessage?: string;
  name: string;
};

export function RadioButtons({
  fieldsetProps,
  hint,
  id,
  legendProps,
  errorMessage,
  values,
  name,
}: Readonly<RadioButtonsProps>) {
  return (
    <div className="form-group">
      <fieldset
        aria-describedby={mergeStrings(
          hint && id + "-hint",
          errorMessage && id + "-error",
        )}
        {...fieldsetProps}
      >
        <legend className="form-label" {...legendProps}></legend>
        {hint && (
          <span className="form-hint" id={id + "-hint"}>
            {hint}
          </span>
        )}
        {errorMessage && (
          <span className="form-error-message" id={id + "-error"}>
            <span className="sr-only">Fejl: </span>
            {errorMessage}
          </span>
        )}
        {values &&
          values.map((value) => (
            <>
              <div className="form-group-radio" key={value.inputProps.id}>
                <input
                  type="radio"
                  name={name}
                  className="form-radio"
                  {...value.inputProps}
                />
                <label className="form-label" htmlFor={value.inputProps.id}>
                  {value.label}
                </label>
              </div>
              {value.hiddenInputField && value.inputProps.checked && (
                <div
                  id={value.inputProps.id + "-collapse"}
                  className="radio-content"
                >
                  <InputField {...value.hiddenInputField}></InputField>
                </div>
              )}
            </>
          ))}
      </fieldset>
    </div>
  );
}
