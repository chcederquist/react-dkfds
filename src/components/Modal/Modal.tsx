import { ReactNode, useEffect, useState } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";
import { ModalBackdrop } from "./ModalBackdrop";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the Modal component.
 *
 * @property id - Unique identifier for the modal.
 * @property header - Props for the modal header, typically including title and heading configuration.
 * @property children - Content to be rendered inside the modal body.
 * @property footer - Optional content to be rendered in the modal footer (e.g., action buttons).
 */
export type ModalProps = {
  id: string;
  header: HeadingProps;
  children: ReactNode;
  show?: boolean;
  onClose?: () => void;
  footer?: ReactNode;
  hasCloseButton?: boolean;
};
// TODO: Close all other modals, create backdrop

/**
 * Renders a modal dialog component with optional header and footer sections.
 * https://designsystem.dk/komponenter/modal/
 *
 * @param id - The unique identifier for the modal, used for accessibility attributes.
 * @param header - Optional header content, typically a Heading component's props.
 * @param children - The main content of the modal.
 * @param footer - Optional footer content, such as action buttons.
 *
 * @remarks
 * - The modal is hidden by default (`aria-hidden="true"`).
 * - The close button triggers a modal close action via the `data-modal-close` attribute.
 * - Accessibility attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`) are included for screen readers.
 */
export function Modal({
  id,
  header,
  children,
  footer,
  show,
  onClose,
  hasCloseButton = true,
}: Readonly<ModalProps>) {
  // Local state to control visibility if 'show' is not provided
  const [visible, setVisible] = useState(show ?? false);
  // If 'show' prop is controlled, sync local state
  useEffect(() => {
    if (typeof show === "boolean") {
      setVisible(show);
    }
  }, [show]);

  // Listen for global close event
  useEffect(() => {
    const handleCloseAll: EventListener = (e: Event | CustomEvent) => {
      if (e instanceof CustomEvent && e.detail?.except !== id) {
        setVisible(false);
      }
    };
    window.addEventListener("closeAllModals", handleCloseAll);
    return () => {
      window.removeEventListener("closeAllModals", handleCloseAll);
    };
  }, [id]);

  // When opening, dispatch event to close others
  useEffect(() => {
    if (visible === true) {
      window.dispatchEvent(
        new CustomEvent("closeAllModals", { detail: { except: id } }),
      );
      setVisible(true);
    }
  }, [visible, id]);

  return (
    <>
      {visible && <ModalBackdrop></ModalBackdrop>}
      <div
        className="fds-modal"
        id={id}
        aria-hidden={visible ? "false" : "true"}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-header`}
      >
        <div className="modal-content">
          {header && (
            <div className="modal-header">
              <Heading
                {...header}
                className={mergeStrings(header.className, "modal-title")}
                id={`${id}-header`}
              ></Heading>
              {hasCloseButton && (
                <button
                  className="modal-close function-link"
                  onClick={() => {
                    setVisible(false);
                    onClose?.();
                  }}
                  data-modal-close
                >
                  <Icon icon="close"></Icon>Luk
                </button>
              )}
            </div>
          )}
          <div className="modal-body">{children}</div>

          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </>
  );
}
