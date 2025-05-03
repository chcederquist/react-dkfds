export function SkipLink({children, mainId}: Readonly<{mainId: string; children: React.ReactNode}>) {
  return (
    <a href={`#${mainId}`} className="skip-link">
      {children}
    </a>
  );
}