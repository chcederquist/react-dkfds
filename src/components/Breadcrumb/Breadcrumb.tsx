import { Icon } from "../Shared/Icon";

/**
 * Props for the Breadcrumb component.
 *
 * @property breadcrumbList - An array of breadcrumb items, each containing:
 *   - `href`: The URL for the breadcrumb link.
 *   - `text`: The display text for the breadcrumb.
 *   - `id`: A unique identifier for the breadcrumb item (string or number).
 */
export type BreadcrumbProps = {
  breadcrumbList: { href: string; text: string; id: string | number }[];
};

/**
 * Renders a breadcrumb navigation component.
 * https://designsystem.dk/komponenter/broedkrumme/
 * @param breadcrumbList - An array of breadcrumb items to display. Each item should contain an `id`, `href`, and `text`.
 * @returns A navigation element with a list of breadcrumb links, indicating the current page.
 *
 * @remarks
 * - The last item in the breadcrumb list is marked as the current page using `aria-current="page"`.
 * - A chevron icon is displayed between breadcrumb items except before the first item.
 * - The last breadcrumb item is rendered as plain text, while others are rendered as links.
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   breadcrumbList={[
 *     { id: 'home', href: '/', text: 'Home' },
 *     { id: 'products', href: '/products', text: 'Products' },
 *     { id: 'details', href: '/products/1', text: 'Details' }
 *   ]}
 * />
 * ```
 */
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
            {index !== 0 && <Icon icon="chevron-right"></Icon>}
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
