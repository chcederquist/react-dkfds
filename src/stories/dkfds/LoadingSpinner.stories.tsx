import type { Meta, StoryObj } from "@storybook/react";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { ScreenReaderLabel } from "../../components/ScreenReaderLabel/ScreenReaderLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
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
