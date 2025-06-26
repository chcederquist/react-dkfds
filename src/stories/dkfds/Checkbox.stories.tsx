import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { InputField } from "../../components/InputField/InputField";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainCheckbox: Story = {
  args: {
    id: "checkbox--example",
    label: "Radioknapper",
    name: "checkbox--example",
    options: [
      {
        id: "radio-1",
        label: "Tjekboks 1",
        value: "option1",
      },
      {
        id: "radio-2",
        label: "Tjekboks 2",
        value: "option2",
      },
      {
        id: "radio-3",
        label: "Tjekboks 3",
        value: "option3",
      },
    ],
  },
};

export const CheckboxErrorMessage: Story = {
  args: {
    error: "Angiv om du er dansk, svensk eller anden nationalitet",
    id: "checkbox--example-error",
    label: "Hvad er din nationalitet?",
    name: "checkbox--example-error",
    options: [
      {
        id: "radio-1-error",
        label: "Dansk",
        value: "option1",
      },
      {
        id: "radio-2-error",
        label: "Svensk",
        value: "option2",
      },
      {
        id: "radio-3-error",
        label: "Anden nationalitet",
        value: "option3",
      },
    ],
  },
};

export const CheckboxWithHint: Story = {
  args: {
    id: "checkbox--example-hint",
    label: "Tjekbokse",
    name: "checkbox--example-hint",
    hint: "Dette er en hjælpetekst",
    options: [
      {
        id: "radio-1-hint",
        label: "Første Tjekboks",
        value: "option1",
      },
      {
        id: "radio-2-hint",
        label: "Anden Tjekboks",
        value: "option2",
      },
      {
        id: "radio-3-hint",
        label: "Tredje Tjekboks",
        value: "option3",
      },
    ],
  },
};

export const CheckboxWithHintForEach: Story = {
  args: {
    id: "checkbox--example-hint-for-each",
    label: "Tjekbokse",
    name: "checkbox--example-hint-for-each",
    options: [
      {
        id: "radio-1-hint-for-each",
        label: "Første tjekboks",
        hint: "Dette er en hjælpetekst",
        value: "option1",
      },
      {
        id: "radio-2-hint-for-each",
        label: "Anden tjekboks",
        hint: "Dette er en hjælpetekst",
        value: "option2",
      },
      {
        id: "radio-3-hint-for-each",
        label: "Tredje tjekboks",
        value: "option3",
      },
    ],
  },
};

export const RadioButtonWithHiddenInputField: Story = {
  args: {
    id: "checkbox--example-hidden-input-field",
    name: "checkbox--example-hidden-input-field",
    options: [
      {
        id: "radio-1-hidden-input-field",
        label: "Tjekboks viser indhold",
        value: "option1",
        checked: true,
        hiddenContent: (
          <InputField
            inputProps={{ id: "hidden-input-1", name: "hidden-input-1" }}
            label="Inputfelt med label"
            inputWidth="m"
          ></InputField>
        ),
      },
    ],
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        {...args}
        onChange={() => {
          setChecked(!checked);
        }}
        options={args.options.map((opt) => ({
          ...opt,
          checked,
        }))}
      />
    );
  },
};
