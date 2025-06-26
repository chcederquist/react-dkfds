import type { Meta, StoryObj } from "@storybook/react";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons";
import { InputField } from "../../components/InputField/InputField";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/RadioButtons",
  component: RadioButtons,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainRadioButtons: Story = {
  args: {
    id: "radio-buttons-example",
    label: "Radioknapper",
    name: "radio-buttons-example",
    options: [
      {
        id: "radio-1",
        label: "Valg 1",
        value: "option1",
      },
      {
        id: "radio-2",
        label: "Valg 2",
        value: "option2",
      },
      {
        id: "radio-3",
        label: "Valg 3",
        value: "option3",
      },
    ],
  },
};

export const RadioButtonsErrorMessage: Story = {
  args: {
    error: "Vælg hvad sagen handler om",
    id: "radio-buttons-example-error",
    label: "Sagen handler om",
    name: "radio-buttons-example-error",
    options: [
      {
        id: "radio-1-error",
        label: "Ulykkesforsikring",
        value: "option1",
      },
      {
        id: "radio-2-error",
        label: "Erstatningsansvar",
        value: "option2",
      },
      {
        id: "radio-3-error",
        label: "Forsikringsselskab",
        value: "option3",
      },
    ],
  },
};

export const RadioButtonsWithHint: Story = {
  args: {
    id: "radio-buttons-example-hint",
    label: "Radioknapper",
    name: "radio-buttons-example-hint",
    hint: "Dete er en hjælpetekst",
    options: [
      {
        id: "radio-1-hint",
        label: "Første radioknap",
        value: "option1",
      },
      {
        id: "radio-2-hint",
        label: "Anden radioknap",
        value: "option2",
      },
      {
        id: "radio-3-hint",
        label: "Tredje radioknap",
        value: "option3",
      },
    ],
  },
};

export const RadioButtonsWithHintForEach: Story = {
  args: {
    id: "radio-buttons-example-hint-for-each",
    label: "Radioknapper",
    name: "radio-buttons-example-hint-for-each",
    hint: "Dette er en hjælpetekst",
    options: [
      {
        id: "radio-1-hint-for-each",
        label: "Første radioknap",
        hint: "Dette er en hjælpetekst",
        value: "option1",
      },
      {
        id: "radio-2-hint-for-each",
        label: "Anden radioknap",
        hint: "Dette er en hjælpetekst",
        value: "option2",
      },
      {
        id: "radio-3-hint-for-each",
        label: "Tredje radioknap",
        value: "option3",
      },
    ],
  },
};

export const RadioButtonWithHiddenInputField: Story = {
  args: {
    id: "radio-buttons-example-hidden-input-field",
    label: "Vælg en radioknap",
    name: "radio-buttons-example-hidden-input-field",
    options: [
      {
        id: "radio-1-hidden-input-field",
        label: "Første radioknap",
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
      {
        id: "radio-2-hidden-input-field",
        label: "Anden radioknap",
        value: "option2",
        hiddenContent: (
          <InputField
            inputProps={{ id: "hidden-input-2", name: "hidden-input-2" }}
            label="Inputfelt med anden label"
            inputWidth="m"
          ></InputField>
        ),
      },
    ],
  },
  render: (args) => {
    const [checked, setChecked] = useState("option1");
    return (
      <RadioButtons
        {...args}
        onChange={(value) => {
          setChecked(value);
        }}
        options={args.options.map((opt) => ({
          ...opt,
          checked: opt.value === checked,
        }))}
      />
    );
  },
};
