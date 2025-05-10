export type LoadingSpinnerProps = { loadingLabel?: string };

export function LoadingSpinner({ loadingLabel }: Readonly<LoadingSpinnerProps>) {
  return (
    <>
      <div className="spinner"></div>
      <div className="spinner-status" role="status">{loadingLabel}</div>
    </>
  );
}