import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components/Badge/Badge";

const meta = {
  title: "DKFDS/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallBadge: Story = {
  args: {
    children: "Lille badge",
  },
};

export const SuccessBadge: Story = {
  args: {
    children: "Positiv status",
    type: "success",
  },
};

export const InfoBadge: Story = {
  args: {
    children: "Neutral status",
    type: "info",
  },
};

export const WarningBadge: Story = {
  args: {
    children: "Advarende status",
    type: "warning",
  },
};

export const ErrorBadge: Story = {
  args: {
    children: "Negativ status",
    type: "error",
  },
};
