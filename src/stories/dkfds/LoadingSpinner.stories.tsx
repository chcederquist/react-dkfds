import type { Meta, StoryObj } from "@storybook/react";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { ScreenReaderLabel } from "../../components/ScreenReaderLabel/ScreenReaderLabel";

const meta = {
  title: "DKFDS/LoadingSpinner",
  component: LoadingSpinner,
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainLoadingSpinner: Story = {
  args: {
    children: (
      <ScreenReaderLabel>Loading spinner på lys baggrund</ScreenReaderLabel>
    ),
  },
  render: (args) => (
    <div className="d-flex justify-content-center">
      <LoadingSpinner {...args} />
    </div>
  ),
};

export const LoadingSpinnerLight: Story = {
  args: {
    light: true,
    children: (
      <ScreenReaderLabel>Loading spinner på mørk baggrund</ScreenReaderLabel>
    ),
  },
  render: (args) => (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "#454545" }}
    >
      <LoadingSpinner {...args} />
    </div>
  ),
};

export const LoadingSpinnerBoxed: Story = {
  args: {
    boxed: true,
  },
};

export const LoadingSpinnerSmall: Story = {
  args: {
    size: "small",
    children: (
      <ScreenReaderLabel>Loading spinner på lys baggrund</ScreenReaderLabel>
    ),
  },
  render: (args) => (
    <div className="d-flex justify-content-center">
      <LoadingSpinner {...args} />
    </div>
  ),
};

export const LoadingSpinnerLightSmall: Story = {
  args: {
    light: true,
    size: "small",
    children: (
      <ScreenReaderLabel>Loading spinner på mørk baggrund</ScreenReaderLabel>
    ),
  },
  render: (args) => (
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: "#454545" }}
    >
      <LoadingSpinner {...args} />
    </div>
  ),
};

export const LoadingSpinnerWithText: Story = {
  args: {
    spinnerStatus: "Henter indhold ...",
  },
  render: (args) => (
    <div className="align-text-center">
      <LoadingSpinner {...args} />
    </div>
  ),
};
