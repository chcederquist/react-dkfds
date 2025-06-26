import { ComponentProps, ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

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
            <span className="sr-only">Fejl: </span>
            {error}
          </span>
        )}
        {options &&
          options.map((option) => {
            const RadioContainer = () => (
              <>
                <div className="form-group-radio" key={option.id}>
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
                className={mergeStrings(
                  "hidden-content-wrapper",
                  option.checked && "show-content",
                )}
              >
                <RadioContainer />
              </div>
            ) : (
              <RadioContainer />
            );
          })}
      </fieldset>
    </div>
  );
}
