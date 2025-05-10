import { ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type DetailsProps = {
  summaryProps: { className: string; children: ReactNode };
  detailsContentProps: { className: string; children: ReactNode };
};

export function Details({
  summaryProps,
  detailsContentProps,
}: Readonly<DetailsProps>) {
  return (
    <details className="details">
      <summary
        {...summaryProps}
        className={mergeStrings("details-summary", summaryProps.className)}
      />
      <div
        {...detailsContentProps}
        className={mergeStrings("details-text", detailsContentProps.className)}
      />
    </details>
  );
}
