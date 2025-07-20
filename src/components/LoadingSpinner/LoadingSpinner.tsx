import { ReactNode } from "react";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the `LoadingSpinner` component.
 *
 * @property size - Determines the size of the spinner. Can be `"small"` or `"large"`.
 * @property light - If `true`, applies a light color scheme to the spinner.
 * @property boxed - If `true`, displays the spinner inside a box.
 * @property spinnerStatus - Optional content to display alongside the spinner, such as a status message.
 * @property children - Optional React nodes to render within the spinner component.
 */
export type LoadingSpinnerProps = {
  size?: "small" | "large";
  light?: boolean;
  boxed?: boolean;
  spinnerStatus?: ReactNode;
  children?: ReactNode;
};

/**
 * Renders a loading spinner component with optional status text and children.
 * https://designsystem.dk/komponenter/spinner/
 *
 * @param props - The properties for the LoadingSpinner component.
 * @param props.size - The size of the spinner, either "large" (default) or "small".
 * @param props.light - If true, applies a light theme to the spinner.
 * @param props.boxed - If true, wraps the spinner in a box container.
 * @param props.children - Optional React children to render alongside the spinner.
 * @param props.spinnerStatus - Optional status text to display below the spinner.
 * @returns The rendered loading spinner component.
 */
export function LoadingSpinner({
  size = "large",
  light = false,
  boxed = false,
  children,
  spinnerStatus,
}: Readonly<LoadingSpinnerProps>) {
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
