import type { Meta, StoryObj } from "@storybook/react";
import { Anchorlinks } from "../../components/Anchorlinks/Anchorlinks";

const meta = {
  title: "DKFDS/Anchorlinks",
  component: Anchorlinks,
} satisfies Meta<typeof Anchorlinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainAnchorlinks: Story = {
  args: {
    headingProps: {
      level: "h2",
      children: "Indhold på siden",
    },
    anchorList: [
      { id: "#æbler", content: "Æbler" },
      { id: "#pærer", content: "Pærer" },
      { id: "#bananer", content: "Bananer" },
    ],
  },
};
