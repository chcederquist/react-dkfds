import { ComponentProps, ReactNode, useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { InputSize } from "../../types/input-widths";
import { HTMLInputPropsWithRequiredFields } from "../../types/html-props";
import { IconName } from "../../types/icon-names";
import { Icon } from "../Shared/Icon";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";
import { useT } from "../../hooks/useT";

/**
 * Props for the `InputField` component.
 *
 * @property inputProps - Props for the underlying `<input>` element. Must include `id` and `name`.
 * @property formGroupProps - Optional props for the wrapping `<div>` element.
 * @property error - Optional error message to display below the input.
 * @property hint - Optional hint text to display below the input.
 * @property characterLimit - Optional character limit for the input field.
 * @property prefix - Optional prefix to display before the input (mutually exclusive with `suffix`).
 * @property suffix - Optional suffix to display after the input (mutually exclusive with `prefix`).
 * @property size - Optional input size (from `InputSize`).
 *
 * Label and search button configuration (mutually exclusive):
 * - With label:
 *   - `label` (optional): The label content.
 *   - `labelProps`: Props for the `<label>` element.
 *   - `searchButtonProps`: Must be `undefined`.
 * - With label (required):
 *   - `label`: The label content.
 *   - `labelProps` (optional): Props for the `<label>` element.
 *   - `searchButtonProps`: Must be `undefined`.
 * - With search button:
 *   - `searchButtonProps`: Props for the search button, including either `{ srLabel, icon }` or `{ label }`.
 *   - `label` (optional): The label content.
 *   - `labelProps` (optional): Props for the `<label>` element.
 */
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
        searchButtonProps?: undefined;
      }
    | {
        label: ReactNode;
        labelProps?: ComponentProps<"label">;
        searchButtonProps?: undefined;
      }
    | {
        searchButtonProps?: ComponentProps<"button"> &
          ({ srLabel: string; icon: IconName } | { label: string });
        label?: ReactNode;
        labelProps?: ComponentProps<"label">;
      }
  );

/**
 * Renders a customizable input field with optional label, hint, error message, character limit, prefix/suffix, and search button.
 * https://designsystem.dk/komponenter/inputfelter/
 * @param label - The label text for the input field.
 * @param labelProps - Additional props for the label element.
 * @param inputProps - Props for the input element, including value, id, and event handlers.
 * @param formGroupProps - Props for the outer form group container.
 * @param hint - Optional hint text displayed below the label.
 * @param characterLimit - Optional maximum number of characters allowed in the input.
 * @param searchButtonProps - Optional props for rendering a search button next to the input.
 * @param error - Optional error message to display below the input.
 * @param props - Additional props, including optional prefix, suffix, inputCharWidth, and inputWidth.
 *
 * @returns A JSX element containing the input field, label, hint, error message, character limit indicator, and optional prefix/suffix/search button.
 */
export function InputField({
  label,
  labelProps,
  inputProps,
  formGroupProps,
  hint,
  characterLimit,
  searchButtonProps,
  error,
  ...props
}: Readonly<InputFieldProps>) {
  const [inputCount, setInputCount] = useState<number>(
    typeof inputProps.value === "number"
      ? inputProps.value
      : (inputProps.value?.length ?? 0),
  );
  const [lastInputEventMs, setLastInputEventMs] = useState<number | undefined>(
    undefined,
  );
  const [srInputCount, setSrInputCount] = useState<number>(inputCount);
  const charactersLeft = (characterLimit ?? 0) - (inputCount ?? 0);
  const srCharactersLeft = (characterLimit ?? 0) - (srInputCount ?? 0);
  const input = (
    <>
      <input
        aria-describedby={mergeStrings(
          characterLimit !== undefined
            ? `${inputProps.id}-limit-message`
            : undefined,
          error ? `${inputProps.id}-error` : undefined,
          hint ? `${inputProps.id}-hint` : undefined,
        )}
        type="text"
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
      {searchButtonProps && (
        <button
          {...searchButtonProps}
          className={mergeStrings(
            "button button-search",
            searchButtonProps.className,
          )}
        >
          {"label" in searchButtonProps && searchButtonProps.label}
          {"srLabel" in searchButtonProps && "icon" in searchButtonProps && (
            <>
              <Icon icon={searchButtonProps.icon}></Icon>
              <ScreenReaderLabel>{searchButtonProps.srLabel}</ScreenReaderLabel>
            </>
          )}
        </button>
      )}
    </>
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        lastInputEventMs === undefined ||
        lastInputEventMs < Date.now() - 500
      ) {
        setSrInputCount(inputCount);
        if (lastInputEventMs !== undefined) {
          setLastInputEventMs(undefined);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [inputCount, lastInputEventMs]);

  const t = useT();

  return (
    <div
      className={mergeStrings(
        "form-group",
        error && "form-error",
        !!characterLimit && "form-limit",
        searchButtonProps && "search",
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
          <ScreenReaderLabel>
            {t("form_element_error_message_prefix_sr_label", {
              error,
              inputType: "text",
            }) ?? "Fejl: "}
          </ScreenReaderLabel>
          {error}
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
          <ScreenReaderLabel id={inputProps.id + "-limit-message"}>
            {t("input_field_character_limit_sr_label", {
              characterLimit,
            }) ??
              `Du kan indtaste op til ${characterLimit}
            tegn`}
          </ScreenReaderLabel>
          <span
            className={mergeStrings(
              "form-hint character-limit",
              charactersLeft < 0 && "limit-exceeded",
            )}
            aria-hidden="true"
          >
            {t("input_field_characters_left", { charactersLeft }) ??
              `Du har ${Math.abs(charactersLeft)} tegn{" "}
            ${charactersLeft < 0 ? "for meget" : "tilbage"}`}
          </span>
          <ScreenReaderLabel
            className="character-limit-sr-only"
            aria-live="polite"
          >
            {t("input_field_characters_left", {
              charactersLeft: srCharactersLeft,
            }) ??
              `Du har ${Math.abs(srCharactersLeft)} tegn{" "}
            ${srCharactersLeft < 0 ? "for meget" : "tilbage"}`}
          </ScreenReaderLabel>
        </>
      )}
    </div>
  );
}
