import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../../components/InputField/InputField";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/InputField",
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

export const MainInputField: Story = {
  args: {
    inputProps: {
      id: "example-input",
      name: "example-input",
    },
    labelProps: { children: "Inputfelt med label" },
  },
};

export const ErrorMessageInputField: Story = {
  args: {
    inputProps: {
      id: "example-input",
      name: "example-input",
    },
    error:
      "Skriv dit fulde navn, og adskil for- og efternavne med mellemrum, fx Anders Andersen",
    label: "Hvad er dit fulde navn?",
  },
};
