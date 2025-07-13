import type { Meta, StoryObj } from "@storybook/react";
import { Anchorlinks } from "../../components/Anchorlinks/Anchorlinks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Anchorlinks",
  component: Anchorlinks,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
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
