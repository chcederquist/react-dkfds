import { ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export function Details({summaryProps, detailsContentProps}: Readonly<{summaryProps: {className: string; children: ReactNode}, detailsContentProps: {className: string; children: ReactNode}}>) {
  return (
    <details className="details">
      <summary {...summaryProps} className={mergeStrings("details-summary", summaryProps.className)} />
      <div {...detailsContentProps} className={mergeStrings("details-text", detailsContentProps.className)} />
    </details>
  )
}