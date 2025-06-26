import { ComponentProps, ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

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
            <span className="sr-only">Fejl: </span>
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
