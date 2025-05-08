export type DropdownProps = {
  labelProps: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
  selectProps: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & Required<Pick<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'id' | 'name'>>;
  options: {value: string; key: string; text: string}[];
  formGroupProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  error?: string;
  hint?: string;
}
export function Dropdown({formGroupProps,selectProps,labelProps,error,hint, options}: Readonly<DropdownProps>) {
  return (
    <div className="form-group" {...formGroupProps}>
      <label className="form-label" htmlFor={selectProps.id} {...labelProps}></label>
      {hint && <span className="form-hint" id={selectProps.id + '-hint'}>{hint}</span>}
      {error && <span className="form-error-message" id={selectProps.id + '-error'}><span className="sr-only">{error}</span></span>}
      <select className="form-select" {...selectProps}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
}