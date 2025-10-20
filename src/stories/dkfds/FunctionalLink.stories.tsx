import type { Meta, StoryObj } from "@storybook/react";
import { FunctionalLink } from "../../components/FunctionalLink/FunctionalLink";
import { Icon } from "../../components/Shared/Icon";

const meta = {
  title: "DKFDS/FunctionalLink",
  component: FunctionalLink,
  subcomponents: { Icon },
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
