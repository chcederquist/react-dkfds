import { ComponentProps } from "react";
import { mergeStrings } from "../../util/merge-classnames";
import { TablePagination, TablePaginationProps } from "./TablePagination";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

/**
 * Renders a table row (`<tr>`) element with optional selection styling.
 *
 * @param children - The content to be rendered inside the table row.
 * @param selected - If `true`, applies the "table-row-selected" CSS class to the row.
 * @param props - Additional props for the `<tr>` element.
 *
 * @returns A `<tr>` element with merged class names and children.
 */
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

/**
 * Props for the `<td>` element in the table component.
 *
 * @property {React.ReactNode} [children] - Content to be rendered inside the table cell.
 * @property {"top" | "middle" | "bottom"} [verticalAlign] - Vertical alignment of the cell content.
 * @property {string} [thResponsiveTitle] - Title of the header for use in responsive tables.
 * @property {"sm" | "md" | "lg"} [responsiveHeadersSize] - Size of the responsive headers, if applicable.
 * @property {ComponentProps<"td">} [props] - Additional props for the `<td>` element.
 */
export type TdProps = {
  children?: React.ReactNode;
  verticalAlign?: "top" | "middle" | "bottom";
  thResponsiveTitle?: string; // Title of the header for use in responsive table
  responsiveHeadersSize?: "sm" | "md" | "lg"; // Size of the responsive headers, if applicable
} & ComponentProps<"td">;

/**
 * Renders a table cell (`<td>`) with optional responsive header title and vertical alignment.
 *
 * @param children - The content to display inside the table cell.
 * @param verticalAlign - Optional vertical alignment for the cell (e.g., "top", "middle", "bottom").
 * @param thResponsiveTitle - Optional title to display as a responsive header inside the cell.
 * @param responsiveHeadersSize - The breakpoint size at which the responsive header is shown ("sm", "md", "lg").
 * @param props - Additional props to pass to the `<td>` element.
 *
 * @returns A `<td>` element with optional responsive header and vertical alignment classes.
 */
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

/**
 * Props for the table header cell (`<th>`) component.
 *
 * @property {React.ReactNode} [children] - Content to be rendered inside the table header cell.
 * @property {"top" | "middle" | "bottom"} [verticalAlign] - Vertical alignment of the cell content.
 * @property {boolean} [noWrap] - If true, prevents the cell content from wrapping.
 * @property {...ComponentProps<"th">} - All standard HTML `<th>` element props.
 */
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

/**
 * Props for the Table component.
 *
 * @property {boolean} [responsiveScroll] - Enables horizontal scrolling for responsive tables.
 * @property {React.ReactNode} [children] - The content of the table, typically table rows and cells.
 * @property {boolean} [borderless] - Removes borders from the table for a cleaner look.
 * @property {boolean} [zebra] - Applies zebra striping to table rows for improved readability.
 * @property {boolean} [selectable] - Allows rows to be selectable.
 * @property {"compact" | "extra-compact"} [compact] - Sets the table to a compact or extra-compact layout.
 * @property {TablePaginationProps} [tablePaginationProps] - Props for table pagination controls.
 * @property {"sm" | "md" | "lg"} [responsiveHeaders] - Sets responsive header breakpoints (small, medium, large).
 * @property {ComponentProps<"table">} [props] - Additional props for the underlying table element.
 */
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

/**
 * Renders a table component with optional responsive scroll and pagination.
 * https://designsystem.dk/komponenter/tables/
 *
 * @param props - The properties for the Table component.
 * @param props.responsiveScroll - If true, wraps the table in a responsive scroll container.
 * @param props.tablePaginationProps - Optional props for rendering table pagination.
 * @returns The rendered table with optional responsive scroll and pagination.
 */
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

/**
 * Renders a checkbox input for selecting a table row.
 *
 * @param checked - Indicates whether the checkbox is checked.
 * @param onRowSelected - Callback function invoked when the checkbox state changes.
 * @param id - Unique identifier for the checkbox input element.
 *
 * The component wraps the checkbox in a styled div and includes a screen reader label for accessibility.
 */
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

/**
 * Checkbox component for selecting or deselecting all rows in a table.
 *
 * @param totalRowsCount - The total number of rows in the table.
 * @param rowIds - Array of row IDs controlled by this checkbox (used for accessibility).
 * @param selectedRowsCount - The current number of selected rows.
 * @param onSelectedAll - Callback invoked when all rows are selected.
 * @param onDeselectedAll - Callback invoked when all rows are deselected.
 *
 * The checkbox displays a "mixed" state when some but not all rows are selected.
 * The label is visually hidden and intended for screen readers.
 */
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
