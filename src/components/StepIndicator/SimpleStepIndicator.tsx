import { useT } from "../../hooks/useT";

export function SimpleStepIndicator({
  stepCount,
  currentStep,
}: {
  stepCount: number;
  currentStep: number;
}) {
  const t = useT();
  return (
    <p className="step-subheading">
      {t("simple_step_indicator_current_step_sr_label", {
        stepNumber: currentStep,
        totalSteps: stepCount,
      }) ?? `Trin ${currentStep} af ${stepCount}`}
    </p>
  );
}
