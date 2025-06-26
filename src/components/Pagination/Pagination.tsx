import { mergeStrings } from "../../util/merge-classnames";

export function PaginationButton({
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
      <a
        href="#"
        className={mergeStrings(
          "button",
          isCurrentPage ? "current-page" : "button-secondary",
        )}
        aria-label={`Side ${number}`}
        onClick={onClick}
      >
        {number}
      </a>
    </li>
  );
}

export type PaginationProps = {
  pageCount: number;
  currentPageNumber: number;
  onPageSelected?: (pageNumber: number) => void;
};

export function Pagination({
  pageCount,
  currentPageNumber,
  onPageSelected,
}: Readonly<PaginationProps>) {
  return (
    <nav
      className="pagination"
      aria-label="Pagineringseksempel med 12 sider"
      id="pagination-ID"
    >
      {currentPageNumber > 1 && (
        <>
          <a
            href="#"
            onClick={() => onPageSelected?.(1)}
            className="button button-arrow button-first"
          >
            <svg className="icon-svg" focusable="false" aria-hidden="true">
              <use href="#first-page"></use>
            </svg>
            <span className="sr-only">Første side</span>
          </a>

          <a
            href="#"
            className="button button-arrow button-previous"
            aria-label="Forrige side"
            onClick={() => onPageSelected?.(currentPageNumber - 1)}
          >
            <svg className="icon-svg" focusable="false" aria-hidden="true">
              <use href="#chevron-left"></use>
            </svg>
            <span className="pagination-nav-link">Forrige</span>
          </a>
        </>
      )}
      <span className="pagination-mobile">
        Side {currentPageNumber} af {pageCount}
      </span>
      <ul className="pagination__items">
        {pageCount <= 7 &&
          Array.from({ length: pageCount }, (_, i) => i + 1).map((c) => (
            <PaginationButton
              key={c}
              number={c}
              isCurrentPage={c === currentPageNumber}
              onClick={() => onPageSelected?.(c)}
            ></PaginationButton>
          ))}

        {pageCount > 7 && (
          <>
            <PaginationButton
              number={1}
              isCurrentPage={1 === currentPageNumber}
              onClick={() => onPageSelected?.(1)}
            ></PaginationButton>
            {currentPageNumber > 4 ? (
              <li className="pagination-item pagination-overflow">
                <span className="sr-only">
                  Prikker som indikerer skjulte sider
                </span>
                <span>...</span>
              </li>
            ) : (
              Array.from({ length: 4 }, (_, i) => i + 2).map((c) => (
                <PaginationButton
                  isCurrentPage={c === currentPageNumber}
                  number={c}
                  key={c}
                  onClick={() => onPageSelected?.(c)}
                ></PaginationButton>
              ))
            )}
            {currentPageNumber > 4 && currentPageNumber < pageCount - 3 && (
              <>
                <PaginationButton
                  number={currentPageNumber - 1}
                  isCurrentPage={false}
                  onClick={() => onPageSelected?.(currentPageNumber - 1)}
                ></PaginationButton>
                <PaginationButton
                  number={currentPageNumber}
                  isCurrentPage={true}
                  onClick={() => onPageSelected?.(currentPageNumber)}
                ></PaginationButton>
                <PaginationButton
                  number={currentPageNumber + 1}
                  isCurrentPage={false}
                  onClick={() => onPageSelected?.(currentPageNumber + 1)}
                ></PaginationButton>
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
                  <PaginationButton
                    isCurrentPage={c === currentPageNumber}
                    number={c}
                    key={c}
                    onClick={() => onPageSelected?.(c)}
                  ></PaginationButton>
                ),
              )
            )}
            <PaginationButton
              number={pageCount}
              isCurrentPage={pageCount === currentPageNumber}
              onClick={() => onPageSelected?.(pageCount)}
            ></PaginationButton>
          </>
        )}
      </ul>
      {currentPageNumber < pageCount && (
        <>
          <a
            href="#"
            className="button button-arrow button-next"
            aria-label="Næste side"
            onClick={() => onPageSelected?.(currentPageNumber + 1)}
          >
            <span className="pagination-nav-link">Næste</span>
            <svg className="icon-svg" focusable="false" aria-hidden="true">
              <use href="#chevron-right"></use>
            </svg>
          </a>
          <a
            href="#"
            className="button button-arrow button-last"
            onClick={() => onPageSelected?.(pageCount)}
          >
            <svg className="icon-svg" focusable="false" aria-hidden="true">
              <use href="#last-page"></use>
            </svg>
            <span className="sr-only">Sidste side</span>
          </a>
        </>
      )}
    </nav>
  );
}
