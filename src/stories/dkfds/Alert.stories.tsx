import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/Alert/Alert";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Alert",
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoAlert: Story = {
  args: {
    children:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    heading: {
      level: "h2",
      children: "Informativ besked",
    },
    type: "info",
  },
};

export const SuccessAlert: Story = {
  args: {
    children:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    heading: {
      level: "h2",
      children: "Succesmeddelelse",
    },
    type: "success",
  },
};

export const WarningAlert: Story = {
  args: {
    children:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    heading: {
      level: "h2",
      children: "Advarsel",
    },
    type: "warning",
  },
};

export const ErrorAlert: Story = {
  args: {
    children:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    heading: {
      level: "h2",
      children: "Fejlbesked",
    },
    type: "error",
  },
};
