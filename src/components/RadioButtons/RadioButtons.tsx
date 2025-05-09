import { mergeStrings } from "../../util/merge-classnames";

export type RadioButtonsProps = {
  legendProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
  fieldsetProps: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
  values: {value: string; id: string; label: string, hint?: string;}[];
  id: string;
  hint?: string;
  errorMessage?: string;
  name: string;
}


export function RadioButtons({ fieldsetProps, hint, id, legendProps, errorMessage, values, name }: Readonly<RadioButtonsProps>) {
  return (
    <div className="form-group">
    <fieldset aria-describedby={mergeStrings(hint && id+'-hint', errorMessage && id+'-error')} {...fieldsetProps}>

        <legend className="form-label" {...legendProps}></legend>
        {hint && <span className="form-hint" id={id+'-hint'}>{hint}</span>}
        {errorMessage && <span className="form-error-message" id={id+'-error'}><span className="sr-only">Fejl: </span>{errorMessage}</span>}
        {values && values.map((value) => (
          <div className="form-group-radio" key={value.id}>
            <input type="radio" id={value.id} name={name}
                className="form-radio" value={value.value} />
            <label className="form-label" htmlFor={value.id}>{value.label}</label>
            {hint && <span className="form-hint" id={value.id + "-hint"}>{hint}</span>}
          </div>
        ))}
    </fieldset>
</div>
  )
}