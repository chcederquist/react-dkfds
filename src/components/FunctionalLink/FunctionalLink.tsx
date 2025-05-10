export type FunctionalLinkProps = {children: React.ReactNode}

export function FunctionalLink({children}: Readonly<FunctionalLinkProps>) {
  return <button type="button" className="functional-link">{children}</button>
}