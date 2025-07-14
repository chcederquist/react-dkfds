import { ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type StructuredListItem = {
  title: ReactNode;
  content: ReactNode;
  action?: ReactNode;
  key: string | number;
};

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
