import { ComponentProps, HTMLElementType } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type ScreenReaderLabelProps<T extends HTMLElementType> =
  ComponentProps<T> & { as?: T };

export function ScreenReaderLabel<T extends HTMLElementType>({
  children,
  as: As = "span",
  ...props
}: Readonly<ScreenReaderLabelProps<T>>) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <As
      {...props}
      className={mergeStrings(
        "sr-only",
        "className" in props && typeof props.className === "string"
          ? props.className
          : undefined,
      )}
    >
      {children}
    </As>
  );
}
