import { ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Represents an item in a structured list, typically used in tables.
 *
 * @property {ReactNode} title - The main title or heading for the list item.
 * @property {ReactNode} content - The detailed content or description for the list item.
 * @property {ReactNode} [action] - Optional action element (e.g., button or link) associated with the item.
 * @property {string | number} key - A unique identifier for the list item, used for React rendering.
 */
export type StructuredListItem = {
  title: ReactNode;
  content: ReactNode;
  action?: ReactNode;
  key: string | number;
};

/**
 * Props for the StructuredList component.
 *
 * @property {("sm" | "md" | "lg")=} breakpoint - Optional breakpoint for responsive layout.
 * @property {("10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100")=} titleWidth - Optional width of the title column as a percentage string.
 * @property {StructuredListItem[]} items - Array of items to display in the structured list.
 */
export type StructuredListProps = {
  breakpoint?: "sm" | "md" | "lg";
  titleWidth?:
    | "10"
    | "20"
    | "30"
    | "40"
    | "50"
    | "60"
    | "70"
    | "80"
    | "90"
    | "100";
  items: StructuredListItem[];
};

/**
 * Renders a responsive structured list as a table, with customizable breakpoints and column widths.
 * https://designsystem.dk/komponenter/tables/
 *
 * @param {Object} props - The props for StructuredList.
 * @param {"sm" | "md" | "lg" | "xl"} [props.breakpoint="sm"] - The breakpoint for responsive header styling.
 * @param {Array} props.items - The list of items to display, each containing a `key`, `title`, `content`, and optional `action`.
 * @param {string} [props.titleWidth="30"] - The width percentage for the title column at the next breakpoint.
 * @param {...any} props - Additional props are spread onto the `<table>` element.
 *
 * @returns {JSX.Element} A responsive table displaying the structured list.
 */
export function StructuredList({
  breakpoint = "sm",
  items,
  titleWidth = "30",
  ...props
}: Readonly<StructuredListProps>) {
  const nextBreakpoint =
    breakpoint === "sm" ? "md" : breakpoint === "md" ? "lg" : "xl";
  return (
    <div
      className={mergeStrings(
        "table structured-list",
        breakpoint && `table-${breakpoint}-responsive-headers`,
      )}
    >
      <table {...props}>
        <tbody>
          {items.map((item) => (
            <tr key={item.key}>
              <th
                scope="row"
                className={`w-percent-${nextBreakpoint}-${titleWidth}`}
              >
                {item.title}
              </th>
              <td>{item.content}</td>
              {item.action && (
                <td
                  className={`d-print-none align-text-${nextBreakpoint}-right`}
                >
                  {item.action}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
