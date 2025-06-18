import { ReactNode, useEffect, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type ToastProps = {
  type: "error" | "info" | "warning" | "success";
  heading: string;
  children: ReactNode;
};

export function Toast({ type, children, heading }: Readonly<ToastProps>) {
  const [isVisible, setIsVisible] = useState(true); // TODO: Add timeout to hide toast according to DKFDS js
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Hide toast after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
    // If the toast is not visible, we can do any cleanup if needed
  }, [isVisible, setIsVisible]);
  return (
    <div
      className={mergeStrings("toast", `toast-${type}`, isVisible && "show")}
      aria-atomic="true"
    >
      <div className="toast-icon"></div>
      <div className="toast-message">
        <p>
          <strong id="notification-heading">{heading}</strong>
        </p>
        {children}
        <button className="toast-close" aria-describedby="notification-heading">
          Luk
        </button>
      </div>
    </div>
  );
}
