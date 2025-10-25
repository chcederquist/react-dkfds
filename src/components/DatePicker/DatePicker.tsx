import { ComponentProps, ReactNode, useEffect, useId, useRef } from "react";
import { HTMLInputPropsWithRequiredFields } from "../../types/html-props";
import { Tooltip, TooltipProps } from "../Tooltip/Tooltip";
import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";
import { useT } from "../../hooks/useT";
export type DatePickerProps = {
  tooltip?: TooltipProps;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  defaultDate?: Date;
  dateFormat?:
    | "DD/MM/YYYY"
    | "DD-MM-YYYY"
    | "DD.MM.YYYY"
    | "DD MM YYYY"
    | "DD/MM-YYYY";
  hint?: string;
  error?: string;
  inputProps: HTMLInputPropsWithRequiredFields<"id" | "name">;
} & (
  | {
      label?: ReactNode;
      labelProps: ComponentProps<"label">;
    }
  | {
      label: ReactNode;
      labelProps?: ComponentProps<"label">;
    }
);

export function DatePicker({
  inputProps,
  labelProps,
  label,
  maxDate,
  minDate,
  defaultDate,
  hint,
  dateFormat = "DD/MM/YYYY",
  tooltip,
  error,
  disabled,
}: DatePickerProps) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  // yyyy-mm-dd
  const minDateString = minDate?.toISOString().split("T")[0];
  const maxDateString = maxDate?.toISOString().split("T")[0];
  const defaultDateString = defaultDate?.toISOString().split("T")[0];
  useEffect(() => {
    if (ref.current === null) return;
    const currentRef = ref.current;
    if (!window.DKFDS) {
      const dkfds = import("dkfds");
      dkfds.then((dkfds) => {
        window.DKFDS = dkfds;
        window.DKFDS.DatePicker.on(ref.current!);
      });
    } else {
      window.DKFDS.DatePicker.on(ref.current!);
    }
    return () => {
      if (window.DKFDS?.DatePicker && currentRef) {
        window.DKFDS.DatePicker.off(currentRef);
      }
    };
  }, [ref]);
  const t = useT();
  return (
    <div
      className={mergeStrings("form-group", error && "form-error")}
      id={id}
      ref={ref}
    >
      <label
        htmlFor={inputProps.id}
        {...labelProps}
        className={mergeStrings(
          "form-label",
          labelProps?.className,
          disabled && "disabled",
        )}
      >
        {label ?? labelProps?.children}
      </label>
      {tooltip && <Tooltip {...tooltip} />}
      {hint && (
        <div className="form-hint" id={inputProps.id + "hint"}>
          {hint}
        </div>
      )}
      {error && (
        <span className="form-error-message" id={inputProps.id + "error"}>
          <ScreenReaderLabel>
            {t("form_element_error_message_prefix_sr_label", {
              error,
              inputType: "date",
            })}
          </ScreenReaderLabel>
          {error}
        </span>
      )}
      <div
        className="date-picker"
        data-min-date={minDateString}
        data-max-date={maxDateString}
        data-default-date={defaultDateString}
        data-dateformat={dateFormat}
      >
        <input
          type="text"
          className="form-input"
          aria-invalid={!!error}
          aria-describedby={
            error
              ? inputProps.id + "error"
              : hint
                ? inputProps.id + "hint"
                : undefined
          }
          disabled={disabled}
          {...inputProps}
        />
      </div>
    </div>
  );
}
