import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../../components/InputField/InputField";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/SearchField",
  component: InputField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
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
