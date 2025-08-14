import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/Alert/Alert";

const meta = {
  title: "DKFDS/Alert",
  component: Alert,
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
    ...InfoAlert.args,
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
