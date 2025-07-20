import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputField, InputFieldProps } from "../InputField/InputField";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

/**
 * Props for the `DateFields` component, which renders a set of input fields for day, month, and year.
 *
 * @property legendProps - Props to be passed to the `<legend>` element.
 * @property fieldsetProps - Optional props to be passed to the `<fieldset>` element.
 * @property dayInputProps - Props for the day input field.
 * @property monthInputProps - Props for the month input field.
 * @property yearInputProps - Props for the year input field.
 * @property id - Unique identifier for the date fields group.
 * @property hint - Optional hint text to display below the fields.
 * @property error - Optional error message to display below the fields.
 */
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

/**
 * Renders a group of input fields for entering a date (day, month, year) with optional legend, hint, and error messages.
 * https://designsystem.dk/komponenter/datofelter/
 *
 * @param legendProps - Props to be passed to the legend element.
 * @param fieldsetProps - Props to be passed to the fieldset element.
 * @param id - Unique identifier used for hint and error message elements.
 * @param hint - Optional hint text displayed below the legend.
 * @param dayInputProps - Props for the day input field.
 * @param monthInputProps - Props for the month input field.
 * @param yearInputProps - Props for the year input field.
 * @param error - Optional error message displayed below the inputs.
 *
 * @returns A JSX element containing the date input fields, legend, hint, and error message.
 */
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
            <ScreenReaderLabel>Fejl: </ScreenReaderLabel>
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
