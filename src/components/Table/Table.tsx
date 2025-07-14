import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { TablePagination, TablePaginationProps } from "./TablePagination";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

export function Tr({
  children,
  selected,
  ...props
}: ComponentProps<"tr"> & { selected?: boolean }) {
  return (
    <tr
      {...props}
      className={mergeStrings(
        props.className,
        selected && "table-row-selected",
      )}
    >
      {children}
    </tr>
  );
}

export type TdProps = {
  children?: React.ReactNode;
  verticalAlign?: "top" | "middle" | "bottom";
  thResponsiveTitle?: string; // Title of the header for use in responsive table
  responsiveHeadersSize?: "sm" | "md" | "lg"; // Size of the responsive headers, if applicable
} & ComponentProps<"td">;

export function Td({
  children,
  verticalAlign,
  thResponsiveTitle,
  responsiveHeadersSize,
  ...props
}: TdProps) {
  return (
    <td
      {...props}
      className={mergeStrings(
        props.className,
        verticalAlign && `vertical-align-${verticalAlign}`,
      )}
    >
      {thResponsiveTitle && responsiveHeadersSize && (
        <>
          <b
            className={`d-${responsiveHeadersSize === "sm" ? "md" : responsiveHeadersSize === "md" ? "lg" : "xl"}-none`} // Hide on sizes above the selected breakpoint
          >
            {thResponsiveTitle}
          </b>
          <br />
        </>
      )}
      {children}
    </td>
  );
}

export type ThProps = {
  children?: React.ReactNode;
  verticalAlign?: "top" | "middle" | "bottom";
  noWrap?: boolean;
} & ComponentProps<"th">;

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
  selectable?: boolean;
  compact?: "compact" | "extra-compact";
  tablePaginationProps?: TablePaginationProps;
  responsiveHeaders?: "sm" | "md" | "lg";
} & ComponentProps<"table">;

function InnerTable({
  children,
  zebra,
  borderless,
  compact,
  responsiveHeaders,
  selectable, // TODO: Finish selectable implementation
  ...props
}: TableProps) {
  return (
    <table
      {...props}
      className={mergeStrings(
        "table",
        zebra && "table--zebra",
        borderless && "table--borderless",
        compact === "compact" && "table--compact",
        compact === "extra-compact" && "table--extracompact",
        selectable && "table--selectable",
        props.className,
        responsiveHeaders && `table-${responsiveHeaders}-responsive-headers`,
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
      <InnerTable {...props} />
      {props.tablePaginationProps && (
        <TablePagination {...props.tablePaginationProps} />
      )}
    </>
  );
}

export function SelectRowCheckbox({
  checked,
  onRowSelected,
  id,
}: {
  checked: boolean;
  onRowSelected: (checked: boolean) => void;
  id: string;
}) {
  return (
    <div className="form-group-checkbox">
      <input
        type="checkbox"
        className="form-checkbox"
        checked={checked}
        onChange={() => {
          onRowSelected(!checked);
        }}
        id={id}
      />
      <label htmlFor="select-all" className="form-label">
        <ScreenReaderLabel>Vælg række</ScreenReaderLabel>
      </label>
    </div>
  );
}

export function SelectAllRowsCheckbox({
  totalRowsCount,
  rowIds,
  selectedRowsCount,
  onSelectedAll,
  onDeselectedAll,
}: {
  totalRowsCount: number;
  selectedRowsCount: number;
  rowIds: string[];
  onSelectedAll: () => void;
  onDeselectedAll: () => void;
}) {
  return (
    <div className="form-group-checkbox">
      <input
        type="checkbox"
        className={mergeStrings(
          "form-checkbox",
          selectedRowsCount > 0 &&
            selectedRowsCount < totalRowsCount &&
            "mixed",
        )}
        onChange={() => {
          if (selectedRowsCount === totalRowsCount) onDeselectedAll();
          else onSelectedAll();
        }}
        checked={selectedRowsCount === totalRowsCount}
        id="select-all"
        aria-controls={rowIds.join(" ")}
      />
      <label htmlFor="select-all" className="form-label">
        <ScreenReaderLabel>Vælg alle rækker</ScreenReaderLabel>
      </label>
    </div>
  );
}
