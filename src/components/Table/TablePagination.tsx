import { mergeStrings } from "../../util/merge-classnames";
import { ScreenReaderLabel } from "../ScreenReaderLabel/ScreenReaderLabel";

export function TablePaginationButton({
  number,
  isCurrentPage,
  onClick,
}: Readonly<{ number: number; isCurrentPage: boolean; onClick: () => void }>) {
  return (
    <li
      className="pagination-item pagination-number"
      aria-label={`Side ${number}`}
      aria-current={isCurrentPage ? "page" : undefined}
    >
      <button
        className={mergeStrings(
          "button",
          isCurrentPage ? "current-page" : "button-secondary",
        )}
        aria-label={`Side ${number}`}
        onClick={onClick}
      >
        {number}
      </button>
    </li>
  );
}

/**
 * Props for the TablePagination component.
 *
 * @property {number} pageCount - The total number of pages available.
 * @property {number} currentPageNumber - The currently selected page number (1-based).
 * @property {(pageNumber: number) => void} onPageSelected - Callback invoked when a page is selected.
 * @property {Object} [pageSizeProps] - Optional props for page size selection.
 * @property {number[]} pageSizeProps.pageSizes - Array of available page sizes.
 * @property {(pageSize: number) => void} pageSizeProps.onPageSelected - Callback invoked when a page size is selected.
 */
export type TablePaginationProps = {
  pageCount: number;
  currentPageNumber: number;
  onPageSelected: (pageNumber: number) => void;
  pageSizeProps?: {
    pageSizes: number[];
    onPageSelected: (pageSize: number) => void;
  };
};

/**
 * Renders a table pagination component with page navigation and page size selection.
 * https://designsystem.dk/komponenter/tables/
 *
 * @param pageCount - The total number of pages available.
 * @param currentPageNumber - The currently selected page number (1-based).
 * @param onPageSelected - Callback invoked when a page or page size is selected.
 * @param pageSizeProps - Optional props for page size selection, including available page sizes.
 *
 * Displays navigation buttons for first, previous, next, and last pages, as well as direct page selection.
 * Handles both small and large page counts, showing ellipsis for hidden pages when necessary.
 * Includes accessibility features such as ARIA labels and screen reader text.
 */
export function TablePagination({
  pageCount,
  currentPageNumber,
  onPageSelected,
  pageSizeProps,
}: Readonly<TablePaginationProps>) {
  return (
    <div className="table-pagination-options">
      {pageSizeProps && (
        <div className="form-group">
          <label className="form-label" htmlFor="pagination-pages">
            Vis rækker per side:
          </label>

          <select
            className="form-select"
            name="pagination-pages"
            onChange={(e) => onPageSelected(Number(e.target.value))}
            id="pagination-pages"
          >
            {pageSizeProps.pageSizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      <div
        className="table-pagination"
        role="group"
        aria-label="Skift side i tabellen"
      >
        {currentPageNumber > 1 && (
          <>
            <button
              onClick={() => onPageSelected(1)}
              className="button button-arrow button-first"
            >
              <svg className="icon-svg" focusable="false" aria-hidden="true">
                <use href="#first-page"></use>
              </svg>
              <ScreenReaderLabel>Første side</ScreenReaderLabel>
            </button>

            <button
              className="button button-arrow button-previous"
              aria-label="Forrige side"
              onClick={() => onPageSelected(currentPageNumber - 1)}
            >
              <svg className="icon-svg" focusable="false" aria-hidden="true">
                <use href="#chevron-left"></use>
              </svg>
              <span className="pagination-nav-link">Forrige</span>
            </button>
          </>
        )}
        <span className="pagination-mobile">
          Side {currentPageNumber} af {pageCount}
        </span>
        <ul className="pagination__items">
          {pageCount <= 7 &&
            Array.from({ length: pageCount }, (_, i) => i + 1).map((c) => (
              <TablePaginationButton
                key={c}
                number={c}
                isCurrentPage={c === currentPageNumber}
                onClick={() => onPageSelected(c)}
              ></TablePaginationButton>
            ))}

          {pageCount > 7 && (
            <>
              <TablePaginationButton
                number={1}
                isCurrentPage={1 === currentPageNumber}
                onClick={() => onPageSelected(1)}
              ></TablePaginationButton>
              {currentPageNumber > 4 ? (
                <li className="pagination-item pagination-overflow">
                  <ScreenReaderLabel>
                    Prikker som indikerer skjulte sider
                  </ScreenReaderLabel>
                  <span>...</span>
                </li>
              ) : (
                Array.from({ length: 4 }, (_, i) => i + 2).map((c) => (
                  <TablePaginationButton
                    isCurrentPage={c === currentPageNumber}
                    number={c}
                    key={c}
                    onClick={() => onPageSelected(c)}
                  ></TablePaginationButton>
                ))
              )}
              {currentPageNumber > 4 && currentPageNumber < pageCount - 3 && (
                <>
                  <TablePaginationButton
                    number={currentPageNumber - 1}
                    isCurrentPage={true}
                    onClick={() => onPageSelected(currentPageNumber - 1)}
                  ></TablePaginationButton>
                  <TablePaginationButton
                    number={currentPageNumber}
                    isCurrentPage={true}
                    onClick={() => onPageSelected(currentPageNumber)}
                  ></TablePaginationButton>
                  <TablePaginationButton
                    number={currentPageNumber + 1}
                    isCurrentPage={true}
                    onClick={() => onPageSelected(currentPageNumber + 1)}
                  ></TablePaginationButton>
                </>
              )}
              {currentPageNumber < pageCount - 3 ? (
                <li className="pagination-item pagination-overflow">
                  <ScreenReaderLabel>
                    Prikker som indikerer skjulte sider
                  </ScreenReaderLabel>
                  <span>...</span>
                </li>
              ) : (
                Array.from({ length: 4 }, (_, i) => pageCount - 4 + i).map(
                  (c) => (
                    <TablePaginationButton
                      isCurrentPage={c === currentPageNumber}
                      number={c}
                      key={c}
                      onClick={() => onPageSelected(c)}
                    ></TablePaginationButton>
                  ),
                )
              )}
              <TablePaginationButton
                number={pageCount}
                isCurrentPage={pageCount === currentPageNumber}
                onClick={() => onPageSelected(pageCount)}
              ></TablePaginationButton>
            </>
          )}
        </ul>
        {currentPageNumber < pageCount && (
          <>
            <a
              href="#"
              className="button button-arrow button-next"
              aria-label="Næste side"
            >
              <span className="pagination-nav-link">Næste</span>
              <svg className="icon-svg" focusable="false" aria-hidden="true">
                <use href="#chevron-right"></use>
              </svg>
            </a>
            <a href="#" className="button button-arrow button-last">
              <svg className="icon-svg" focusable="false" aria-hidden="true">
                <use href="#last-page"></use>
              </svg>
              <ScreenReaderLabel>Sidste side</ScreenReaderLabel>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
