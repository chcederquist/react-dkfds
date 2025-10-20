import type { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";

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
        {...(props as ComponentProps<"a">)}
        className={mergeStrings("function-link", props.className)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={"button"}
      {...(props as ComponentProps<"button">)}
      className={mergeStrings("function-link", props.className)}
    >
      {children}
    </button>
  );
}
