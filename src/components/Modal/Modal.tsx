import { ReactNode } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";

export type ModalProps = {id: string; header: HeadingProps; children: ReactNode; footer?: ReactNode};
// TODO: Close all other modals
export function Modal({ id, header, children, footer }: Readonly<ModalProps>) {
  return (
    <div className="fds-modal" id={id} aria-hidden="true" role="dialog" aria-modal="true"
    aria-labelledby={`${id}-header`}>
    <div className="modal-content">
        {header && <div className="modal-header">
          <Heading {...header} id={`${id}-header`}></Heading>
          <button className="modal-close function-link"
                data-modal-close><Icon icon="close"></Icon>Luk</button>
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