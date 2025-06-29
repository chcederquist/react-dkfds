import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../components/Tag/Tag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Tag",
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTag: Story = {
  args: {
    children: "Default",
  },
};

export const TagWithIcon: Story = {
  args: {
    children: "Default",
    icon: "close",
    onClick: () => {
      console.log("Tag clicked");
    },
  },
};
