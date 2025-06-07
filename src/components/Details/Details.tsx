import { ComponentProps, ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type DetailsProps = {
  summaryProps: ComponentProps<"summary">;
  detailsProps?: ComponentProps<"details">;
  children: ReactNode;
};

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
