import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputField, InputFieldProps } from "../InputField/InputField";

export type CheckboxProps = {
  legendProps: ComponentProps<"legend">;
  fieldsetProps?: ComponentProps<"fieldset">;
  options: {
    value: string;
    id: string;
    inputProps?: ComponentProps<"input">;
    checked?: boolean;
    label: string;
    hint?: string;
    hiddenInputField?: InputFieldProps;
  }[];
  id: string;
  hint?: string;
  error?: string;
  name: string;
};

export function Checkbox({
  fieldsetProps,
  hint,
  id,
  legendProps,
  error,
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
          options.map((value) => (
            <>
              <div className="form-group-checkbox" key={value.id}>
                <input
                  type="checkbox"
                  name={name}
                  className="form-checkbox"
                  checked={value.checked}
                  aria-describedby={value.hint ? value.id + "-hint" : undefined}
                  {...value.inputProps}
                />
                <label className="form-label" htmlFor={value.id}>
                  {value.label}
                </label>
                {value.hint && (
                  <span className="form-hint" id={value.id + "-hint"}>
                    {value.hint}
                  </span>
                )}
              </div>
              {value.hiddenInputField && value.checked && (
                <div id={value.id + "-collapse"} className="checkbox-content">
                  <InputField {...value.hiddenInputField}></InputField>
                </div>
              )}
            </>
          ))}
      </fieldset>
    </div>
  );
}
