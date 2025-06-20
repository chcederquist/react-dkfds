import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputField, InputFieldProps } from "../InputField/InputField";

export type DateFieldsProps = {
  legendProps: ComponentProps<"legend">;
  fieldsetProps?: ComponentProps<"fieldset">;
  dayInputProps: InputFieldProps["inputProps"];
  monthInputProps: InputFieldProps["inputProps"];
  yearInputProps: InputFieldProps["inputProps"];
  id: string;
  hint?: string;
  error?: string;
};

export function DateFields({
  legendProps,
  fieldsetProps,
  id,
  hint,
  dayInputProps,
  monthInputProps,
  yearInputProps,
  error,
}: Readonly<DateFieldsProps>) {
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
        <div className="date-group mt-3">
          <InputField
            formGroupProps={{ className: "form-group form-group-day" }}
            inputProps={{ type: "number", ...dayInputProps }}
            labelProps={{ children: "Dag" }}
          ></InputField>
          <InputField
            formGroupProps={{ className: "form-group form-group-month" }}
            inputProps={{ type: "number", ...monthInputProps }}
            labelProps={{ children: "Måned" }}
          ></InputField>
          <InputField
            formGroupProps={{ className: "form-group form-group-year" }}
            inputProps={{ type: "number", ...yearInputProps }}
            labelProps={{ children: "Dag" }}
          ></InputField>
        </div>
      </fieldset>
    </div>
  );
}
