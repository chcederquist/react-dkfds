import { HTMLElementProps } from "../../types/html-props";
import { mergeStrings } from "../../util/merge-classnames";
import { TablePagination, TablePaginationProps } from "./TablePagination";

export type TdProps = {
  children?: React.ReactNode;
  verticalAlign?: "top" | "middle" | "bottom";
} & HTMLElementProps<HTMLTableCellElement>;

export function Td({ children, verticalAlign, ...props }: TdProps) {
  return (
    <td
      {...props}
      className={mergeStrings(
        props.className,
        verticalAlign && `vertical-align-${verticalAlign}`,
      )}
    >
      {children}
    </td>
  );
}

export type ThProps = TdProps & { noWrap?: boolean };

export function Th({ children, noWrap, verticalAlign, ...props }: ThProps) {
  return (
    <th
      {...props}
      className={mergeStrings(
        noWrap && "table-header-no-wrap",
        props.className,
        verticalAlign && `vertical-align-${verticalAlign}`,
      )}
    >
      {children}
    </th>
  );
}

export type TableProps = {
  responsiveScroll?: boolean;
  children?: React.ReactNode;
  borderless?: boolean;
  zebra?: boolean;
  compact?: "compact" | "extra-compact";
  tablePaginationProps?: TablePaginationProps;
  // TODO: DKFDS.ResponsiveTable + DKFDS.SelectableRows
} & HTMLElementProps<HTMLTableElement>;

function InnerTable({
  children,
  zebra,
  borderless,
  compact,
  ...props
}: TableProps) {
  return (
    <table
      {...props}
      className={mergeStrings(
        zebra && "table--zebra",
        borderless && "table--borderless",
        compact === "compact" && "table--compact",
        compact === "extra-compact" && "table--extracompact",
        props.className,
      )}
    >
      {children}
    </table>
  );
}

export function Table(props: TableProps) {
  if (props.responsiveScroll) {
    <>
      <div className="table--responsive-scroll">
        <InnerTable {...props} />
      </div>
      {props.tablePaginationProps && (
        <TablePagination {...props.tablePaginationProps} />
      )}
    </>;
  }
  return (
    <>
      <InnerTable {...props} />;
      {props.tablePaginationProps && (
        <TablePagination {...props.tablePaginationProps} />
      )}
    </>
  );
}
