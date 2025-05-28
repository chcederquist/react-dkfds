import { mergeStrings } from "../../util/merge-classnames";

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

export type TablePaginationProps = {
  pageCount: number;
  currentPageNumber: number;
  onPageSelected: (pageNumber: number) => void;
  pageSizeProps?: {
    pageSizes: number[];
    onPageSelected: (pageSize: number) => void;
  };
};

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
                <use xlinkHref="#first-page"></use>
              </svg>
              <span className="sr-only">Første side</span>
            </button>

            <button
              className="button button-arrow button-previous"
              aria-label="Forrige side"
              onClick={() => onPageSelected(currentPageNumber - 1)}
            >
              <svg className="icon-svg" focusable="false" aria-hidden="true">
                <use xlinkHref="#chevron-left"></use>
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
                  <span className="sr-only">
                    Prikker som indikerer skjulte sider
                  </span>
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
                  <span className="sr-only">
                    Prikker som indikerer skjulte sider
                  </span>
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
                <use xlinkHref="#chevron-right"></use>
              </svg>
            </a>
            <a href="#" className="button button-arrow button-last">
              <svg className="icon-svg" focusable="false" aria-hidden="true">
                <use xlinkHref="#last-page"></use>
              </svg>
              <span className="sr-only">Sidste side</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
