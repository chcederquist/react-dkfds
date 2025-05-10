import { useEffect, useMemo, useState } from "react";

export type LoadingSpinnerProps =
  | { spinnerType: "static"; loadingLabel: string }
  | {
      spinnerType: "dynamic";
      messages: [number, string][];
      onTimeout: () => void;
      timeoutAfterMs: number;
    };

export function LoadingSpinner({
  spinnerType,
  ...props
}: Readonly<LoadingSpinnerProps>) {
  const messages = useMemo(
    () => ("messages" in props ? props.messages : []),
    [props],
  );
  const [currentLoadingLabel, setCurrentLoadingLabel] = useState(
    spinnerType === "static" && "loadingLabel" in props
      ? props.loadingLabel
      : messages[0][1],
  );
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    if (spinnerType === "dynamic") {
      for (let i = 1; i < messages.length; i++) {
        timeouts.push(
          setTimeout(() => {
            setCurrentLoadingLabel(messages[i][1]);
          }, messages[i][0]),
        );
      }
      if ("timeoutAfterMs" in props) {
        timeouts.push(
          setTimeout(() => {
            props.onTimeout();
          }, props.timeoutAfterMs),
        );
      }
    }

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [messages, props, spinnerType]);
  return (
    <>
      <div className="spinner"></div>
      <div className="spinner-status" role="status">
        {currentLoadingLabel}
      </div>
    </>
  );
}
