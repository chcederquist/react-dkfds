import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../components/Tag/Tag";

const meta = {
  title: "DKFDS/Tag",
  component: Tag,
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
