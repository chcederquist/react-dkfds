import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../../components/Textarea/Textarea";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/TextArea",
  component: TextArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTextarea: Story = {
  args: {
    textareaProps: {
      id: "Textarea-example",
      name: "Textarea-example",
      rows: 5,
    },
    label: "Tekstområde med label",
  },
};

export const ErrorTextarea: Story = {
  args: {
    textareaProps: {
      id: "Textarea-example-error",
      name: "Textarea-example-error",
      rows: 5,
    },
    label: "Tekstområde med fejlmeddelelse",
    error: "Hjælpsom fejlmeddelelse",
  },
};

export const CharacterLimitTextarea: Story = {
  args: {
    textareaProps: {
      id: "Textarea-example-character-limit",
      name: "Textarea-example-character-limit",
      rows: 5,
    },
    label: "Tekstområde med karakterbegrænsning",
    characterLimit: 100,
  },
  render: (args) => {
    const [input, setInput] = useState("");
    return (
      <TextArea
        {...args}
        textareaProps={{
          ...args.textareaProps,
          onChange: (e) => setInput(e.target.value),
          value: input,
        }}
      ></TextArea>
    );
  },
};
