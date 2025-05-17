export type HTMLElementProps<T extends HTMLElement> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;
export type HTMLButtonProps<T extends HTMLElement> = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<T>,
  T
>;

export type HTMLTextAreaPropsWithRequiredFields<
  R extends keyof React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
> = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  Required<
    Pick<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      R
    >
  >;

export type HTMLInputPropsWithRequiredFields<
  R extends keyof React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
> = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Required<
    Pick<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      R
    >
  >;

export type HTMLSelectPropsWithRequiredFields<
  R extends keyof React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
> = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  Required<
    Pick<
      React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >,
      R
    >
  >;
