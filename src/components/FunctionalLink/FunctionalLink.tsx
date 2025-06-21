import { ComponentProps } from "react";

export type FunctionalLinkProps = { children: React.ReactNode } & (
  | ({ as: "a" } & ComponentProps<"a">)
  | ({
      as: "button";
    } & ComponentProps<"button">)
);

export function FunctionalLink({
  children,
  as,
  ...props
}: Readonly<FunctionalLinkProps>) {
  if (as === "a") {
    return (
      <a
        href="#"
        className="functional-link"
        {...(props as ComponentProps<"a">)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={"button"}
      className="functional-link"
      {...(props as ComponentProps<"button">)}
    >
      {children}
    </button>
  );
}
