import { ReactNode } from "react";

export type FooterVariantListProps = {
  footerContent: ReactNode;
};

export function Footer({ footerContent }: FooterVariantListProps) {
  return (
    <footer>
      <div className="footer">
        <div className="container">{footerContent}</div>
      </div>
    </footer>
  );
}
