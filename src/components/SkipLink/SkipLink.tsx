export type SkipLinkProps = {mainId: string; children: React.ReactNode}

export function SkipLink({children, mainId}: Readonly<SkipLinkProps>) {
  return (
    <a href={`#${mainId}`} className="skip-link">
      {children}
    </a>
  );
}