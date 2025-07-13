import { ComponentProps, ReactNode, useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputSize } from "../../types/input-widths";
import { HTMLTextAreaPropsWithRequiredFields } from "../../types/html-props";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

export type TextAreaProps = {
  textareaProps: HTMLTextAreaPropsWithRequiredFields<"id" | "name">;
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
export function TextArea({
  labelProps,
  label,
  textareaProps: inputProps,
  formGroupProps,
  hint,
  characterLimit,
  error,
  ...props
}: Readonly<TextAreaProps>) {
  const [inputCount, setInputCount] = useState<number>(
    typeof inputProps.value === "number"
      ? inputProps.value
      : (inputProps.value?.length ?? 0),
  );

  const [lastInputEventMs, setLastInputEventMs] = useState<number | undefined>(
    undefined,
  );
  const [visibleInputCount, setVisibleInputCount] =
    useState<number>(inputCount);
  const charactersLeft = (characterLimit ?? 0) - (visibleInputCount ?? 0);
  const input = (
    <textarea
      className={mergeStrings(
        "form-input",
        "inputCharWidth" in props && `input-char-${props.inputCharWidth}`,
        "inputWidth" in props && `input-width-${props.inputWidth}`,
        charactersLeft < 0 && "form-limit-error",
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
        error && "form-error",
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
      {error && (
        <span className="form-error-message" id={inputProps.id + "-error"}>
          <ScreenReaderLabel>Fejl: </ScreenReaderLabel>
          {error}
        </span>
      )}
      {"prefix" in props && (
        <div className="form-input-wrapper form-input-wrapper--prefix">
          <div className="form-input-prefix" aria-hidden="true"></div>
          {input}
        </div>
      )}
      {"suffix" in props && (
        <div className="form-input-wrapper form-input-wrapper--suffix">
          {input}
          <div className="form-input-suffix" aria-hidden="true"></div>
        </div>
      )}
      {!("suffix" in props) && !("prefix" in props) && input}
      {characterLimit && (
        <>
          <ScreenReaderLabel id={inputProps.id + "-limit-message"}>
            Du kan indtaste op til {charactersLeft}
            tegn
          </ScreenReaderLabel>
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
          <ScreenReaderLabel
            className="character-limit-sr-only"
            aria-live="polite"
          >
            Du har {Math.abs(charactersLeft)} tegn{" "}
            {charactersLeft < 0 ? "for meget" : "tilbage"}
          </ScreenReaderLabel>
        </>
      )}
    </div>
  );
}
