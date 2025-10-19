/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, ReactNode, useEffect, useId, useRef } from "react";
import { HTMLInputPropsWithRequiredFields } from "../../types/html-props";
export type DatePickerProps = {
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

export function DatePicker({ inputProps, labelProps, label }: DatePickerProps) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current === null) return;
    if (!(window as any).DKFDS) {
      const dkfds = import("dkfds");
      dkfds.then((dkfds) => {
        (window as any).DKFDS = dkfds;
        (window as any).DKFDS.datePicker.on(ref.current!);
      });
    } else {
      (window as any).DKFDS.datePicker.on(ref.current!);
    }
    return () => {
      if ((window as any).DKFDS.datePicker && ref.current) {
        (window as any).DKFDS.datePicker.off(ref.current);
      }
    };
  }, [ref]);
  return (
    <div className="form-group" id={id} ref={ref}>
      <label className="form-label" htmlFor={inputProps.id}>
        {label ?? labelProps?.children}
      </label>

      <div className="date-picker">
        <input type="text" className="form-input" {...inputProps} />
      </div>
    </div>
  );
}
