import { useState } from "react";
import { useT } from "../../hooks/useT";
import { mergeStrings } from "../../util/merge-classnames";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Shared/Icon";

export function StepIndicator({
  steps,
  stepIndicatorId,
  onStepClick,
}: {
  onStepClick?: (stepIndex: number, disabled?: boolean) => void;
  stepIndicatorId: string;
  steps: {
    title: string;
    status: "completed" | "error" | "default";
    stepInformation?: string;
    disabled?: boolean;
    current?: boolean;
  }[];
}) {
  const t = useT();
  const [showMobileDialog, setShowMobileDialog] = useState(false);
  const stepList = (
    <ol className="step-indicator">
      {steps.map((step, index) => {
        const StepElement = step.disabled ? "div" : "a";
        return (
          <li
            key={index}
            className={mergeStrings(
              step.disabled && "disabled",
              step.current && "current",
              step.status === "error" && "error",
            )}
          >
            <StepElement
              className="step"
              aria-current={step.current ? "step" : undefined}
              href={StepElement === "a" ? "#" : undefined}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onStepClick?.(index, step.disabled);
              }}
            >
              {(step.status === "completed" || step.status === "error") && (
                <span className="step-icon">
                  {/* Step completed */}
                  {step.status === "completed" && (
                    <Icon
                      icon="check"
                      svgProps={{
                        "aria-label": t(
                          "step_indicator_step_completed_sr_label",
                          {
                            stepNumber: index + 1,
                          },
                        ),
                      }}
                    />
                  )}
                  {/* Step has error */}
                  {step.status === "error" && (
                    <Icon
                      icon="error"
                      svgProps={{
                        "aria-label": t("step_indicator_error_icon_sr_label", {
                          stepNumber: index + 1,
                        }),
                      }}
                    />
                  )}
                </span>
              )}
              {step.status === "default" && (
                <span className="step-number">
                  <span>{index + 1}</span>
                </span>
              )}
              <div>
                <span className="step-title">{step.title}</span>
                {step.stepInformation && (
                  <span className="step-information">
                    {step.stepInformation}
                  </span>
                )}
              </div>
            </StepElement>
          </li>
        );
      })}
    </ol>
  );
  const currentStep = steps.findIndex((step) => step.current === true) + 1 || 1;
  return (
    <>
      <nav aria-label="Trinindikator" className="d-none d-md-block">
        {stepList}
      </nav>
      <div>
        <button
          className="step-indicator-button d-md-none"
          aria-haspopup="dialog"
          onClick={() => setShowMobileDialog(true)}
          type="button"
        >
          <span>
            {t("step_indicator_mobile_indicator_button", {
              stepNumber: currentStep,
              totalSteps: steps.length,
            }) ?? (
              <>
                Trin <strong>{currentStep}</strong> af {steps.length}
              </>
            )}
          </span>
        </button>
      </div>
      <Modal
        modalType="step-indicator"
        header={{
          children:
            t("step_indicator_mobile_modal_heading", {
              stepNumber: currentStep,
              totalSteps: steps.length,
            }) ?? `Trin ${currentStep} af ${steps.length}`,
          level: "h2",
        }}
        id={stepIndicatorId}
        onClose={() => setShowMobileDialog(false)}
        show={showMobileDialog}
      >
        <nav aria-label="Trinindikator" className="d-md-none">
          {stepList}
        </nav>
      </Modal>
    </>
  );
}
