import { ComponentProps } from "react";

export type HTMLTextAreaPropsWithRequiredFields<
  R extends keyof React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
> = ComponentProps<"textarea"> &
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
> = ComponentProps<"input"> &
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
> = ComponentProps<"select"> &
  Required<
    Pick<
      React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >,
      R
    >
  >;
