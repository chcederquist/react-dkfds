import type { Meta, StoryObj } from "@storybook/react";
import { BackLink } from "../../components/BackLink/BackLink";

const meta = {
  title: "DKFDS/BackLink",
  component: BackLink,
} satisfies Meta<typeof BackLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainBackLink: Story = {
  args: {
    children: "Tilbage",
  },
};
