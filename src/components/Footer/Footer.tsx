import { ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export function FooterGrid({ children }: { children: ReactNode }) {
  return <div className="row">{children}</div>;
}

export function FooterColumn({
  children,
  hideOnPrint,
  xs,
  sm,
  md,
  lg,
  xl,
}: {
  children: ReactNode;
  hideOnPrint?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
}) {
  return (
    <div
      className={mergeStrings(
        "footer-col",
        hideOnPrint && "d-print-none",
        xs && `col-${xs}`,
        sm && `col-sm-${sm}`,
        md && `col-md-${md}`,
        lg && `col-lg-${lg}`,
        xl && `col-xl-${xl}`,
      )}
    >
      <section>{children}</section>
    </div>
  );
}

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer>
      <div className="footer">
        <div className="container">{children}</div>
      </div>
    </footer>
  );
}
