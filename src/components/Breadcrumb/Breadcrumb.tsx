export type BreadcrumbProps = {
  breadcrumbList: { href: string; text: string; id: string | number }[];
};

export function Breadcrumb({ breadcrumbList }: Readonly<BreadcrumbProps>) {
  return (
    <nav className="breadcrumbs container" aria-label="Brødkrumme">
      <ol className="breadcrumbs__list">
        {breadcrumbList.map((item, index, array) => (
          <li
            key={item.id}
            aria-current={index === array.length - 1 ? "page" : undefined}
            className="breadcrumbs__list-item"
          >
            {index !== array.length - 1 ? (
              <a className="breadcrumbs__link" href={item.href}>
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
