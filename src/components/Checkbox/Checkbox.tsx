import { ComponentProps } from "react";
import { HTMLInputPropsWithRequiredFields } from "../../types/html-props";
import { mergeStrings } from "../../util/merge-classnames";
import { InputField, InputFieldProps } from "../InputField/InputField";

export type CheckboxProps = {
  legendProps: ComponentProps<"legend">;
  fieldsetProps: ComponentProps<"fieldset">;
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

export function Checkbox({
  fieldsetProps,
  hint,
  id,
  legendProps,
  errorMessage,
  values,
  name,
}: Readonly<CheckboxProps>) {
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
              <div className="form-group-checkbox" key={value.inputProps.id}>
                <input
                  type="checkbox"
                  name={name}
                  className="form-checkbox"
                  aria-describedby={
                    value.hint ? value.inputProps.id + "-hint" : undefined
                  }
                  {...value.inputProps}
                />
                <label className="form-label" htmlFor={value.inputProps.id}>
                  {value.label}
                </label>
                {value.hint && (
                  <span
                    className="form-hint"
                    id={value.inputProps.id + "-hint"}
                  >
                    {value.hint}
                  </span>
                )}
              </div>
              {value.hiddenInputField && value.inputProps.checked && (
                <div
                  id={value.inputProps.id + "-collapse"}
                  className="checkbox-content"
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
