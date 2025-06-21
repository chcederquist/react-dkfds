import { ComponentProps, ReactNode, useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputSize } from "../../types/input-widths";
import { HTMLInputPropsWithRequiredFields } from "../../types/html-props";

export type InputFieldProps = {
  inputProps: HTMLInputPropsWithRequiredFields<"id" | "name">;
  formGroupProps?: ComponentProps<"div">;
  error?: string;
  hint?: string;
  characterLimit?: number;
} & ({ prefix?: string } | { suffix?: string }) &
  Partial<InputSize> &
  (
    | {
        label?: ReactNode;
        labelProps: ComponentProps<"label">;
      }
    | { label: ReactNode; labelProps?: ComponentProps<"label"> }
  );
export function InputField({
  label,
  labelProps,
  inputProps,
  formGroupProps,
  hint,
  characterLimit,
  error,
  ...props
}: Readonly<InputFieldProps>) {
  const [inputCount, setInputCount] = useState<number>(
    typeof inputProps.value === "number"
      ? inputProps.value
      : (inputProps.value?.length ?? 0),
  );
  let _error = error;
  if (_error === undefined) {
    if (characterLimit !== undefined && inputCount > characterLimit) {
      _error = `Du kan maks. taste ${characterLimit} tegn`;
    }
  }
  const [lastInputEventMs, setLastInputEventMs] = useState<number | undefined>(
    undefined,
  );
  const [visibleInputCount, setVisibleInputCount] =
    useState<number>(inputCount);
  const charactersLeft = (characterLimit ?? 0) - (visibleInputCount ?? 0);
  const input = (
    <input
      className={mergeStrings(
        "form-input",
        "inputCharWidth" in props && `input-char-${props.inputCharWidth}`,
        "inputWidth" in props && `input-width-${props.inputWidth}`,
      )}
      aria-describedby={mergeStrings(
        characterLimit !== undefined
          ? `${inputProps.id}-limit-message`
          : undefined,
        error ? `${inputProps.id}-error` : undefined,
        hint ? `${inputProps.id}-hint` : undefined,
      )}
      {...inputProps}
      onChange={
        characterLimit !== undefined
          ? (ev) => {
              setInputCount(ev.target.value.length);
              if (lastInputEventMs === undefined) {
                setLastInputEventMs(Date.now());
              }
              inputProps.onChange?.(ev);
            }
          : inputProps.onChange
      }
    />
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        lastInputEventMs === undefined ||
        lastInputEventMs < Date.now() - 300
      ) {
        setVisibleInputCount(inputCount);
        if (lastInputEventMs !== undefined) {
          setLastInputEventMs(undefined);
        }
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [inputCount, lastInputEventMs]);
  return (
    <div
      className={mergeStrings(
        "form-group",
        _error && "form-error",
        !!characterLimit && "form-limit",
      )}
      {...formGroupProps}
    >
      <label className="form-label" htmlFor={inputProps.id} {...labelProps}>
        {label ?? labelProps?.children}
      </label>
      {hint && (
        <span className="form-hint" id={inputProps.id + "-hint"}>
          {hint}
        </span>
      )}
      {_error && (
        <span className="form-error-message" id={inputProps.id + "-error"}>
          <span className="sr-only">Fejl: </span>
          {_error}
        </span>
      )}
      {"prefix" in props && (
        <div className="form-input-wrapper form-input-wrapper--prefix">
          <div className="form-input-prefix" aria-hidden="true">
            {props.prefix}
          </div>
          {input}
        </div>
      )}
      {"suffix" in props && (
        <div className="form-input-wrapper form-input-wrapper--suffix">
          {input}
          <div className="form-input-suffix" aria-hidden="true">
            {props.suffix}
          </div>
        </div>
      )}
      {!("suffix" in props) && !("prefix" in props) && input}
      {characterLimit && (
        <>
          <span id={inputProps.id + "-limit-message"} className="sr-only">
            Du kan indtaste op til {charactersLeft}
            tegn
          </span>
          <span
            className={mergeStrings(
              "form-hint character-limit",
              charactersLeft < 0 && "limit-exceeded",
            )}
            aria-hidden="true"
          >
            Du har {Math.abs(charactersLeft)} tegn{" "}
            {charactersLeft < 0 ? "for meget" : "tilbage"}
          </span>
          <span className="character-limit-sr-only sr-only" aria-live="polite">
            Du har {Math.abs(charactersLeft)} tegn{" "}
            {charactersLeft < 0 ? "for meget" : "tilbage"}
          </span>
        </>
      )}
    </div>
  );
}
