import { useState } from "react";
import { mergeClassnames } from "../../util/merge-classnames";

export type InputFieldProps = {
  labelProps: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
  inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Required<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'id' | 'name'>>;
  formGroupProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  hint?: string;
  characterLimit?: number;
}
  & ({ prefix?: string } | { suffix?: string })
  & ({ inputCharWidth: '4' | '8' | '11' | '27' } | { inputWidth: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' })
export function InputField({ labelProps, inputProps, formGroupProps, hint, characterLimit, ...props }: Readonly<InputFieldProps>) {
  const [inputCount, setInputCount] = useState<number>(typeof inputProps.value === 'number' ? inputProps.value : inputProps.value?.length ?? 0);
  const charactersLeft = (characterLimit ?? 0) - (inputCount ?? 0)
  const input = <input
    className={mergeClassnames("form-input", 'inputCharWidth' in props && `input-char-${props.inputCharWidth}`, 'inputWidth' in props && `input-width-${props.inputWidth}`)}
    {...inputProps}
    onChange={characterLimit !== undefined ? (ev) => {
      setInputCount(ev.target.value.length); // TODO: Debounce this by 500ms
      inputProps.onChange?.(ev)
    } : inputProps.onChange}
  />;
  return (
    <div className="form-group" {...formGroupProps}>
      <label className="form-label" htmlFor={inputProps.id} {...labelProps}></label>
      {hint && <span className="form-hint" id={inputProps.id + '-hint'}>{hint}</span>}
      {'prefix' in props && <div className="form-input-wrapper form-input-wrapper--prefix"><div className="form-input-prefix" aria-hidden="true"></div>{input}</div>}
      {'suffix' in props && <div className="form-input-wrapper form-input-wrapper--suffix">{input}<div className="form-input-suffix" aria-hidden="true"></div></div>}
      {!('suffix' in props) && !('prefix' in props) && input}
      {characterLimit && <>
        <span id="input-type-text-limit-limit-message" className="sr-only">Du kan indtaste op til {charactersLeft}
        tegn</span>
        <span className="form-hint character-limit" aria-hidden="true">Du har {charactersLeft} tegn tilbage</span>
        <span className="character-limit-sr-only sr-only" aria-live="polite">Du har {charactersLeft} tegn
            tilbage</span>
        </>}
    </div>
  )
}