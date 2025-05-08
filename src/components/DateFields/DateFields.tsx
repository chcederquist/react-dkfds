import { mergeStrings } from "../../util/merge-classnames";
import { InputField, InputFieldProps } from "../InputField/InputField";

export type DateFieldsProps = {
  legendProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
  fieldSetProps: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
  dayInputProps: InputFieldProps['inputProps'];
  monthInputProps: InputFieldProps['inputProps'];
  yearInputProps: InputFieldProps['inputProps'];
  id: string;
  hint: string;
  errorMessage?: string;
}

export function DateFields({ legendProps, fieldSetProps, id, hint, dayInputProps, monthInputProps, yearInputProps, errorMessage }: Readonly<DateFieldsProps>) {
  
  return (
    <div className="form-group">
      <fieldset aria-describedby={mergeStrings('form-hint', errorMessage && id+'-error')} {...fieldSetProps}>
        <legend className="form-label" {...legendProps}>
          <span className="form-hint" id={id+'-hint'}>{hint}</span>
          {errorMessage && <span className="form-error-message" id={id+'-error'}><span className="sr-only">Fejl: </span>{errorMessage}</span>}
          <div className="date-group mt-3">
            <InputField formGroupProps={{className: 'form-group form-group-day'}} inputProps={{type: 'number', ...dayInputProps}} labelProps={{children: 'Dag'}}></InputField>
            <InputField formGroupProps={{className: 'form-group form-group-month'}} inputProps={{type: 'number', ...monthInputProps}} labelProps={{children: 'Måned'}}></InputField>
            <InputField formGroupProps={{className: 'form-group form-group-year'}} inputProps={{type:'number', ...yearInputProps}} labelProps={{children: 'Dag'}}></InputField>
          </div>
        </legend>
      </fieldset>
    </div>
  )
}