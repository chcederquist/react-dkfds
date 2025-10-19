import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "../../components/DatePicker/DatePicker";

const meta = {
  title: "DKFDS/DatePicker",
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainInputField: Story = {
  args: {
    inputProps: {
      id: "example-input",
      name: "example-input",
    },
    labelProps: { children: "Inputfelt med label" },
  },
};
