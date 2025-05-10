import { ReactNode, useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type ToastProps = {type: 'error' | 'info' | 'warning' | 'success'; heading: string; children: ReactNode }

export function Toast({type, children, heading}: Readonly<ToastProps>) {
  const [isVisible, setIsVisible] = useState(true); // TODO: Add timeout to hide toast according to DKFDS js
  return (
    <div className={mergeStrings('toast', `toast-${type}`, isVisible && 'show')} aria-atomic="true">
    <div className="toast-icon"></div>
    <div className="toast-message">
        <p><strong id="notification-heading">{heading}</strong></p>
        {children}
        <button className="toast-close" aria-describedby="notification-heading">Luk</button>
    </div>
</div>
  )
}