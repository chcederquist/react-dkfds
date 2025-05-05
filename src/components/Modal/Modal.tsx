import { ReactNode } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";

// TODO: Close all other modals
export function Modal({ id, header, children, footer }: Readonly<{id: string; header: HeadingProps; children: ReactNode; footer?: ReactNode}>) {
  return (
    <div className="fds-modal" id={id} aria-hidden="true" role="dialog" aria-modal="true"
    aria-labelledby={`${id}-header`}>
    <div className="modal-content">
        {header && <div className="modal-header">
          <Heading {...header} id={`${id}-header`}></Heading>
          <button className="modal-close function-link"
                data-modal-close><svg className="icon-svg" focusable="false" aria-hidden="true"><use xlinkHref="#close"></use></svg>Luk</button>
        </div>}
        <div className="modal-body">
          {children}
        </div>

        {footer && <div className="modal-footer">
          {footer}
        </div>}

    </div>
</div>
  )
}