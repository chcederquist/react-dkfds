import { mergeStrings } from "../../util/merge-classnames";

export function ModalBackdrop({
  type,
  visible,
}: {
  type?: "default" | "step-indicator";
  visible?: boolean;
}) {
  return (
    <div
      className={mergeStrings(
        "modal-backdrop",
        visible && `show`,
        type === "step-indicator" && `step-indicator`,
      )}
      id="modal-backdrop"
    ></div>
  );
}
