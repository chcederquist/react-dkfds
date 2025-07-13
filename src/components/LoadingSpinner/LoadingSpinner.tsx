import { ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type LoadingSpinner = {
  size?: "small" | "large";
  light?: boolean;
  boxed?: boolean;
  spinnerStatus?: ReactNode;
  children?: ReactNode;
};
export function LoadingSpinner({
  size = "large",
  light = false,
  boxed = false,
  children,
  spinnerStatus,
}: Readonly<LoadingSpinner>) {
  const content = (
    <>
      <div
        className={mergeStrings(
          "spinner",
          light && "spinner-light",
          size === "small" && "spinner-small",
        )}
      ></div>
      {spinnerStatus && (
        <div className="spinner-status" role="status">
          {spinnerStatus}
        </div>
      )}
      {children}
    </>
  );
  return boxed ? <div className="spinner-box">{content}</div> : content;
}
