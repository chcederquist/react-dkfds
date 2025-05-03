import { ReactNode } from "react";
import { mergeClassnames } from "../../util/merge-classnames";

export function Details({summaryProps, detailsContentProps}: Readonly<{summaryProps: {className: string; children: ReactNode}, detailsContentProps: {className: string; children: ReactNode}}>) {
  return (
    <details className="details">
      <summary {...summaryProps} className={mergeClassnames("details-summary", summaryProps.className)} />
      <div {...detailsContentProps} className={mergeClassnames("details-text", detailsContentProps.className)} />
    </details>
  )
}