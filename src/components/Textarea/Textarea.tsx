import { ComponentProps, ReactNode, useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputSize } from "../../types/input-widths";
import { HTMLTextAreaPropsWithRequiredFields } from "../../types/html-props";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";
import { Tooltip, TooltipProps } from "../Tooltip/Tooltip";

/**
 * Props for the `Textarea` component.
 *
 * @property textareaProps - Props for the underlying `<textarea>` element. Must include required fields `"id"` and `"name"`.
 * @property formGroupProps - Optional props for the wrapping `<div>` element.
 * @property error - Optional error message to display.
 * @property hint - Optional hint text to display below the textarea.
 * @property characterLimit - Optional maximum character count for the textarea.
 * @property prefix - Optional prefix to display before the textarea (mutually exclusive with `suffix`).
 * @property suffix - Optional suffix to display after the textarea (mutually exclusive with `prefix`).
 * @property label - Optional label for the textarea.
 * @property labelProps - Props for the `<label>` element. Required if `label` is optional, otherwise optional.
 * @property size - Optional size of the textarea input (from `InputSize`).
 */
export type TextAreaProps = {
  textareaProps: HTMLTextAreaPropsWithRequiredFields<"id" | "name">;
  formGroupProps?: ComponentProps<"div">;
  error?: string;
  disabled?: boolean;
  tooltip?: TooltipProps;
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

/**
 * Renders a styled textarea input with label, hint, error message, and optional character limit.
 * https://designsystem.dk/komponenter/tekstomraade/
 *
 * @param labelProps - Props for the label element.
 * @param label - The label text for the textarea.
 * @param textareaProps - Props for the textarea element.
 * @param formGroupProps - Props for the form group container.
 * @param hint - Optional hint text displayed below the label.
 * @param characterLimit - Optional maximum number of characters allowed in the textarea.
 * @param error - Optional error message displayed below the textarea.
 * @param props - Additional props, including optional prefix/suffix and input width settings.
 *
 * @remarks
 * - Displays character count and limit feedback if `characterLimit` is provided.
 * - Handles prefix and suffix decorations for the textarea input.
 * - Provides accessible labels and error messages for screen readers.
 */
export function TextArea({
  labelProps,
  label,
  textareaProps: inputProps,
  formGroupProps,
  hint,
  characterLimit,
  disabled,
  error,
  tooltip,
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
      disabled={disabled}
      aria-describedby={mergeStrings(
        characterLimit !== undefined
          ? `${inputProps.id}-limit-message`
          : undefined,
        error ? `${inputProps.id}-error` : undefined,
        hint ? `${inputProps.id}-hint` : undefined,
      )}
      {...inputProps}
      className={mergeStrings(
        inputProps.className,
        "form-input",
        "inputCharWidth" in props && `input-char-${props.inputCharWidth}`,
        "inputWidth" in props && `input-width-${props.inputWidth}`,
        charactersLeft < 0 && "form-limit-error",
      )}
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
