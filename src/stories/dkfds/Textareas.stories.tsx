import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../../components/Textarea/Textarea";
import { useState } from "react";

const meta = {
  title: "DKFDS/TextArea",
  component: TextArea,
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

export const DisabledTextarea: Story = {
  args: {
    textareaProps: {
      id: "Textarea-example-character-limit",
      name: "Textarea-example-character-limit",
      rows: 5,
      placeholder: "Låst indhold",
    },
    label: "Deaktiveret tekstområde",
    disabled: true,
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
