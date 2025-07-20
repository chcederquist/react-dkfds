/**
 * A component that renders a skip link for improved accessibility,
 * allowing users to quickly navigate to the main content of the page.
 *
 * @param {SkipLinkProps} props - Props for the SkipLink component.
 * @param {React.ReactNode} props.children - The content of the skip link.
 * @param {string} props.mainId - The id of the main content element to skip to.
 * @returns {JSX.Element} An anchor element styled as a skip link.
 *
 * @example
 * <SkipLink mainId="main-content">Skip to main content</SkipLink>
 */
import { ComponentProps } from "react";

/**
 * Props for the SkipLink component.
 *
 * Extends all anchor (`<a>`) element props and adds a required `mainId` property.
 * https://designsystem.dk/komponenter/skip-link/
 *
 * @property mainId - The id of the main content element to which the skip link should navigate.
 */
export type SkipLinkProps = ComponentProps<"a"> & { mainId: string };

export function SkipLink({
  children,
  mainId,
  ...props
}: Readonly<SkipLinkProps>) {
  return (
    <a href={`#${mainId}`} className="skip-link" {...props}>
      {children}
    </a>
  );
}
