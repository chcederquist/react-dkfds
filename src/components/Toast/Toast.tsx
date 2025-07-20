import { ReactElement, ReactNode, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the Toast component.
 *
 * @property type - The type of toast to display. Can be "error", "info", "warning", or "success".
 * @property heading - The heading text displayed at the top of the toast.
 * @property children - Optional content to display within the toast.
 * @property onClose - Optional callback invoked when the toast is closed.
 */
export type ToastProps = {
  type: "error" | "info" | "warning" | "success";
  heading: string;
  children?: ReactNode;
  onClose?: () => void;
};

/**
 * A container component for displaying toast notifications.
 *
 * @param children - An array of `Toast` elements to be rendered inside the container.
 *
 * The container uses ARIA attributes to ensure accessibility for screen readers:
 * - `aria-live="assertive"`: Notifies assistive technologies that updates should be presented immediately.
 * - `aria-atomic="false"`: Indicates that assistive technologies should not treat the entire region as a single atomic unit.
 * - `aria-relevant="additions"`: Specifies that only additions to the container are relevant for notification.
 */
export function ToastContainer({
  children,
}: {
  children: ReactElement<ToastProps>[];
}) {
  return (
    <div
      className="toast-container"
      aria-live="assertive"
      aria-atomic="false"
      aria-relevant="additions"
    >
      {children}
    </div>
  );
}

/**
 * Renders a toast notification component with customizable type, heading, and content.
 * The toast can be closed either by invoking the provided `onClose` callback or by updating its internal visibility state.
 * https://designsystem.dk/komponenter/toastbesked/
 *
 * @param {ToastProps} props - The properties for the Toast component.
 * @param {'success' | 'error' | 'info' | 'warning'} props.type - The type of the toast, which determines its styling.
 * @param {React.ReactNode} props.children - The content to display inside the toast.
 * @param {string} props.heading - The heading text for the toast notification.
 * @param {() => void} [props.onClose] - Optional callback invoked when the toast is closed.
 *
 * @returns {JSX.Element} The rendered toast notification.
 */
export function Toast({
  type,
  children,
  heading,
  onClose,
}: Readonly<ToastProps>) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      className={mergeStrings(
        "toast",
        `toast-${type}`,
        (onClose || isVisible) && "show",
      )}
      aria-atomic="true"
    >
      <div className="toast-icon"></div>
      <div className="toast-message">
        <p>
          <strong id="notification-heading">{heading}</strong>
        </p>
        {children}
        <button
          className="toast-close"
          aria-describedby="notification-heading"
          onClick={() => (onClose ? onClose() : setIsVisible(false))}
        >
          Luk
        </button>
      </div>
    </div>
  );
}
