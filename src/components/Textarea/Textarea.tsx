import { useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputSize } from "../../types/input-widths";
import {
  HTMLElementProps,
  HTMLTextAreaPropsWithRequiredFields,
} from "../../types/html-props";

export type TextAreaProps = {
  labelProps: HTMLElementProps<HTMLLabelElement>;
  textareaProps: HTMLTextAreaPropsWithRequiredFields<"id" | "name">;
  formGroupProps: HTMLElementProps<HTMLDivElement>;
  error?: string;
  hint?: string;
  characterLimit?: number;
} & ({ prefix?: string } | { suffix?: string }) &
  Partial<InputSize>;
export function TextArea({
  labelProps,
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
              setLastInputEventMs(Date.now());
              inputProps.onChange?.(ev);
            }
          : inputProps.onChange
      }
    />
  );
  useEffect(() => {
    setInterval(() => {
      if (
        lastInputEventMs === undefined ||
        lastInputEventMs < Date.now() - 500
      ) {
        setVisibleInputCount(inputCount);
      }
    }, 1000);
  }, [inputCount, lastInputEventMs]);
  return (
    <div className="form-group" {...formGroupProps}>
      <label
        className="form-label"
        htmlFor={inputProps.id}
        {...labelProps}
      ></label>
      {hint && (
        <span className="form-hint" id={inputProps.id + "-hint"}>
          {hint}
        </span>
      )}
      {error && (
        <span className="form-error-message" id={inputProps.id + "-error"}>
          <span className="sr-only">Fejl: </span>
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
          <span id={inputProps.id + "-limit-message"} className="sr-only">
            Du kan indtaste op til {charactersLeft}
            tegn
          </span>
          <span className="form-hint character-limit" aria-hidden="true">
            Du har {charactersLeft} tegn tilbage
          </span>
          <span className="character-limit-sr-only sr-only" aria-live="polite">
            Du har {charactersLeft} tegn tilbage
          </span>
        </>
      )}
    </div>
  );
}
