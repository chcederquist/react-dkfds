import { ComponentProps, ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the `Details` component.
 *
 * @property summaryProps - Props to be spread onto the `<summary>` element.
 * @property detailsProps - Optional props to be spread onto the `<details>` element.
 * @property children - Content to be rendered inside the `<details>` element.
 */
export type DetailsProps = {
  summaryProps: ComponentProps<"summary">;
  detailsProps?: ComponentProps<"details">;
  children: ReactNode;
};

/**
 * Renders a styled `<details>` element with a customizable `<summary>` and content.
 * https://designsystem.dk/komponenter/detaljer/
 *
 * @param summaryProps - Props to be spread onto the `<summary>` element, including optional className.
 * @param detailsProps - Props to be spread onto the `<details>` element.
 * @param children - Content to be displayed inside the details section.
 *
 * @remarks
 * The component merges the default "details-summary" class with any provided `summaryProps.className`.
 */
export function Details({
  summaryProps,
  detailsProps,
  children,
}: Readonly<DetailsProps>) {
  return (
    <details className="details" {...detailsProps}>
      <summary
        {...summaryProps}
        className={mergeStrings("details-summary", summaryProps.className)}
      />
      <div className={"details-text"}>{children}</div>
    </details>
  );
}
