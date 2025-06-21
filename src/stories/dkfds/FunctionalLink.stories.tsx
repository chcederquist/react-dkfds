import type { Meta, StoryObj } from "@storybook/react";
import { FunctionalLink } from "../../components/FunctionalLink/FunctionalLink";
import { Icon } from "../../components/Shared/Icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/FunctionalLink",
  component: FunctionalLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof FunctionalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainFunctionalLink: Story = {
  args: {
    as: "button",
    children: (
      <>
        <Icon icon="print"></Icon> Print
      </>
    ),
  },
};
