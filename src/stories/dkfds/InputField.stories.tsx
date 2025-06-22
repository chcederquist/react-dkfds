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
