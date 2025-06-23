import type { Meta, StoryObj } from "@storybook/react";
import {
  InputField,
  InputFieldProps,
} from "../../components/InputField/InputField";

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

export const MostFieldsMandatory: Story = {
  args: {} as InputFieldProps,
  render: () => (
    <form>
      <InputField
        label="Label"
        inputProps={{
          id: "mandatory-input",
          name: "mandatory-input",
          required: true,
        }}
      ></InputField>
      <InputField
        label={
          <>
            Label <span style={{ fontWeight: "normal" }}>(frivilligt)</span>
          </>
        }
        inputProps={{
          id: "non-mandatory-input",
          name: "non-mandatory-input",
        }}
      ></InputField>
      <InputField
        label="Label"
        inputProps={{
          id: "mandatory-input2",
          name: "mandatory-input2",
          required: true,
        }}
      ></InputField>
      <InputField
        label="Label"
        inputProps={{
          id: "mandatory-input3",
          name: "mandatory-input3",
          required: true,
        }}
      ></InputField>
    </form>
  ),
};

export const MostFieldsNonMandatory: Story = {
  args: {} as InputFieldProps,
  render: () => (
    <form>
      <InputField
        label="Label"
        inputProps={{
          id: "mandatory-input",
          name: "mandatory-input",
          required: false,
        }}
      ></InputField>
      <InputField
        label={
          <>
            Label <span style={{ fontWeight: "normal" }}>(*skal udfyldes)</span>
          </>
        }
        inputProps={{
          id: "non-mandatory-input",
          name: "non-mandatory-input",
          required: true,
        }}
      ></InputField>
      <InputField
        label="Label"
        inputProps={{
          id: "mandatory-input2",
          name: "mandatory-input2",
          required: false,
        }}
      ></InputField>
      <InputField
        label="Label"
        inputProps={{
          id: "mandatory-input3",
          name: "mandatory-input3",
          required: false,
        }}
      ></InputField>
    </form>
  ),
};

export const ReadonlyInputField: Story = {
  args: {
    inputProps: {
      id: "example-input-readonly",
      name: "example-input-readonly",
      readOnly: true,
      value: "012345-6789",
    },
    label: "Inputfelt som er readonly",
  },
};

export const DisabledInputField: Story = {
  args: {
    inputProps: {
      id: "example-input-readonly",
      name: "example-input-readonly",
      disabled: true,
      value: "012345-6789",
    },
    label: "Inputfelt som er readonly",
  },
};

export const InputFieldWithPrefix: Story = {
  args: {
    inputProps: {
      id: "example-input-prefix",
      name: "example-input-prefix",
    },
    label: "Beløb i €",
    prefix: "€",
  },
};

export const InputFieldWithSuffix: Story = {
  args: {
    inputProps: {
      id: "example-input-suffix",
      name: "example-input-suffix",
    },
    label: "Antal styk",
    suffix: "stk.",
  },
};

export const InputFieldWithCharacterLimit: Story = {
  args: {
    inputProps: {
      id: "example-input-character-limit",
      name: "example-input-character-limit",
    },
    label: "Inputfelt med tegnbegrænsning",
    characterLimit: 20,
  },
};

export const InputFieldWidths: Story = {
  args: {} as InputFieldProps,
  render: () => {
    return (
      <>
        <fieldset>
          <legend className="h4">Input bredde med rem</legend>
          <InputField
            inputWidth="xxs"
            label={"Inputfelt med klassen input-width-xxs (8rem)"}
            inputProps={{
              id: "input-width-1",
              name: "input-width-1",
            }}
          ></InputField>
          <InputField
            inputWidth="xs"
            label={"Inputfelt med klassen input-width-xs (16rem)"}
            inputProps={{
              id: "input-width-2",
              name: "input-width-2",
            }}
          ></InputField>
          <InputField
            inputWidth="s"
            label={"Inputfelt med klassen input-width-s (24rem)"}
            inputProps={{
              id: "input-width-3",
              name: "input-width-3",
            }}
          ></InputField>
          <InputField
            inputWidth="m"
            label={"Inputfelt med klassen input-width-m (32rem)"}
            inputProps={{
              id: "input-width-4",
              name: "input-width-4",
            }}
          ></InputField>
          <InputField
            inputWidth="l"
            label={"Inputfelt med klassen input-width-l (40rem)"}
            inputProps={{
              id: "input-width-5",
              name: "input-width-5",
            }}
          ></InputField>
          <InputField
            inputWidth="xl"
            label={"Inputfelt med klassen input-width-xl (48rem)"}
            inputProps={{
              id: "input-width-6",
              name: "input-width-6",
            }}
          ></InputField>
        </fieldset>
        <fieldset>
          <legend className="h4">Input bredde med tegn</legend>
          <InputField
            inputCharWidth="4"
            label={"Inputfelt med klassen input-char-width-4 (4 tegn)"}
            inputProps={{
              id: "input-char-width-1",
              name: "input-char-width-1",
            }}
          ></InputField>
          <InputField
            inputCharWidth="8"
            label={"Inputfelt med klassen input-char-width-8 (8 tegn)"}
            inputProps={{
              id: "input-char-width-2",
              name: "input-char-width-2",
            }}
          ></InputField>
          <InputField
            inputCharWidth="11"
            label={"Inputfelt med klassen input-char-width-11 (11 tegn)"}
            inputProps={{
              id: "input-char-width-3",
              name: "input-char-width-3",
            }}
          ></InputField>
          <InputField
            inputCharWidth="27"
            label={"Inputfelt med klassen input-char-width-27 (27 tegn)"}
            inputProps={{
              id: "input-char-width-4",
              name: "input-char-width-4",
            }}
          ></InputField>
        </fieldset>
      </>
    );
  },
};
