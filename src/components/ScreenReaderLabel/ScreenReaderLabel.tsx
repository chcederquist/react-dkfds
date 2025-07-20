import { ComponentProps, HTMLElementType } from "react";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the `ScreenReaderLabel` component.
 *
 * @template T - The type of HTML element to render.
 * @property {T} [as] - The HTML element type to render as. Defaults to the base element type.
 * @remarks
 * Inherits all props from the specified HTML element type via `ComponentProps<T>`.
 */
export type ScreenReaderLabelProps<T extends HTMLElementType> =
  ComponentProps<T> & { as?: T };

/**
 * Renders a visually hidden label for screen readers using the specified HTML element.
 *
 * @template T - The type of HTML element to render (e.g., 'span', 'div', etc.).
 * @param props - Props for the ScreenReaderLabel component.
 * @param props.children - The content to be read by screen readers.
 * @param props.as - The HTML element type to render. Defaults to 'span'.
 * @returns A React element that is hidden visually but accessible to screen readers.
 */
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
