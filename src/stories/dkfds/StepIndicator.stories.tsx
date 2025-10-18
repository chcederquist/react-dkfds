import type { Meta, StoryObj } from "@storybook/react";
import { StepIndicator } from "../../components/StepIndicator/StepIndicator";
import { SimpleStepIndicator } from "../../components/StepIndicator/SimpleStepIndicator";

const meta = {
  title: "DKFDS/StepIndicator",
  component: StepIndicator,
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainStepIndicator: Story = {
  args: {
    steps: [
      {
        title: "Trin 1",
        status: "completed",
      },
      {
        title: "Trin 2",
        status: "default",
        current: true,
      },
      {
        title: "Trin 3",
        status: "default",
        disabled: true,
      },
    ],
    stepIndicatorId: "main-step-indicator",
    onStepClick: (stepIndex, disabled) => {
      if (disabled) {
        alert(`Trin ${stepIndex + 1} er deaktiveret`);
      } else {
        alert(`Klikket på trin ${stepIndex + 1}`);
      }
    },
  },
};

export const StepIndicatorWithExtraInfo: Story = {
  args: {
    steps: [
      {
        title: "Trin 1",
        status: "completed",
        stepInformation: "Informationstekst for trin 1",
      },
      {
        title: "Trin 2",
        status: "default",
        current: true,
        stepInformation: "Informationstekst for trin 2",
      },
      {
        title: "Trin 3",
        status: "default",
        disabled: true,
        stepInformation: "Informationstekst for trin 3",
      },
    ],
    stepIndicatorId: "step-indicator-with-extra-info",
    onStepClick: (stepIndex, disabled) => {
      if (disabled) {
        alert(`Trin ${stepIndex + 1} er deaktiveret`);
      } else {
        alert(`Klikket på trin ${stepIndex + 1}`);
      }
    },
  },
};

export const StepIndicatorWithError: Story = {
  args: {
    steps: [
      {
        title: "Trin 1",
        status: "error",
      },
      {
        title: "Trin 2",
        status: "default",
        current: true,
      },
      {
        title: "Trin 3",
        status: "default",
        disabled: true,
      },
    ],
    stepIndicatorId: "main-step-indicator",
    onStepClick: (stepIndex, disabled) => {
      if (disabled) {
        alert(`Trin ${stepIndex + 1} er deaktiveret`);
      } else {
        alert(`Klikket på trin ${stepIndex + 1}`);
      }
    },
  },
};

export const SimpleStepIndicatorExample: Story = {
  args: {
    steps: [],
    stepIndicatorId: "none",
  },
  render: () => (
    <SimpleStepIndicator currentStep={2} stepCount={3}></SimpleStepIndicator>
  ),
};
