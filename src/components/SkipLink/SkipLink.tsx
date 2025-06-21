import { ComponentProps } from "react";

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
