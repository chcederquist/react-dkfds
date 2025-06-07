import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components/Badge/Badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallBadge: Story = {
  args: {
    children: "Lille badge",
    size: "small",
  },
};

export const LargeBadge: Story = {
  args: {
    children: "Stort badge",
    size: "large",
  },
};

export const SuccessBadge: Story = {
  args: {
    children: "Positiv status",
    size: "small",
    type: "success",
  },
};

export const InfoBadge: Story = {
  args: {
    children: "Neutral status",
    size: "small",
    type: "info",
  },
};

export const WarningBadge: Story = {
  args: {
    children: "Advarende status",
    size: "small",
    type: "warning",
  },
};

export const ErrorBadge: Story = {
  args: {
    children: "Negativ status",
    size: "small",
    type: "error",
  },
};
