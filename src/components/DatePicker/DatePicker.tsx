/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, ReactNode, useEffect, useId, useRef } from "react";
import { HTMLInputPropsWithRequiredFields } from "../../types/html-props";
import { Tooltip, TooltipProps } from "../Tooltip/Tooltip";
export type DatePickerProps = {
  tooltip: TooltipProps;
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
  tooltip,
}: DatePickerProps) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current === null) return;
    const currentRef = ref.current;
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
      if ((window as any).DKFDS.datePicker && currentRef) {
        (window as any).DKFDS.datePicker.off(currentRef);
      }
    };
  }, [ref]);
  return (
    <div className="form-group" id={id} ref={ref}>
      <label className="form-label" htmlFor={inputProps.id}>
        {label ?? labelProps?.children}
      </label>
      {tooltip && <Tooltip {...tooltip} />}
      <div className="date-picker">
        <input type="text" className="form-input" {...inputProps} />
      </div>
    </div>
  );
}
