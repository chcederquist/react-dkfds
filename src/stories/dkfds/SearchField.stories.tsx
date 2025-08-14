import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../../components/InputField/InputField";

const meta = {
  title: "DKFDS/SearchField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainSearchField: Story = {
  args: {
    inputProps: {
      id: "search-field",
      name: "search-field",
      type: "search",
    },
    inputCharWidth: "27",
    searchButtonProps: {
      label: "Søg",
    },
  },
};

export const MainSearchFieldIcon: Story = {
  args: {
    inputProps: {
      id: "search-field",
      name: "search-field",
      type: "search",
    },
    inputCharWidth: "27",
    searchButtonProps: {
      icon: "search",
      srLabel: "Søg",
    },
  },
};
