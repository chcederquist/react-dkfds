import type { Meta, StoryObj } from "@storybook/react";
import { TabContainer } from "../../components/Tabs/Tabs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Tabs",
  component: TabContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof TabContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTabs: Story = {
  args: {
    tabs: [{ label: "Tab 1", id: "tab1", children: "Content for Tab 1" }],
  },
};
