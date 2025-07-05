import { ReactElement, ReactNode, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type ToastProps = {
  type: "error" | "info" | "warning" | "success";
  heading: string;
  children?: ReactNode;
  onClose?: () => void;
};

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
