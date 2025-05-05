export function LoadingSpinner({ loadingLabel }: Readonly<{ loadingLabel?: string }>) {
  return (
    <>
      <div className="spinner"></div>
      <div className="spinner-status" role="status">{loadingLabel}</div>
    </>
  );
}