import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../../components/InputField/InputField";
import { Accordion } from "../../components/Accordion/Accordion";
import { Alert } from "../../components/Alert/Alert";
import { DateFields } from "../../components/DateFields/DateFields";
import { Dropdown } from "../../components/Dropdown/Dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/ErrorMessage",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFieldError: Story = {
  args: {},
  render: () => (
    <InputField
      labelProps={{ children: "Hvad hedder dit kursus?" }}
      hint={"Fx. Skriv godt"}
      error="Giv dit kursus et navn"
      inputProps={{
        id: "course-name-error",
        name: "course-name-error",
      }}
    ></InputField>
  ),
};

export const AccordionError: Story = {
  args: {},
  render: () => (
    <Accordion
      accordionElements={[
        {
          error: true,
          id: "error-accordion",
          headerContent: {
            headingProps: { level: "h2" },
            children: "Lorem ipsum dolor sit amet",
          },
          children: (
            <>
              <Alert id={"error-message-accordion"} type="error">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Alert>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </>
          ),
        },
      ]}
    ></Accordion>
  ),
};

export const DateFieldsError: Story = {
  render: () => (
    <DateFields
      dayInputProps={{
        id: "dag-story-error",
        name: "day",
      }}
      monthInputProps={{
        id: "måned-story-error",
        name: "month",
      }}
      yearInputProps={{
        id: "år-story-error",
        name: "year",
      }}
      id="date-fields-story-error"
      legendProps={{
        children: "Hvornår blev dit pas udstedt?",
      }}
      errorMessage="Datoen kan ikke være i fremtiden."
      hint={"For eksempel: 05 12 2018"}
    ></DateFields>
  ),
};

export const ErrorDropdown: Story = {
  render: () => (
    <Dropdown
      labelProps={{
        children: "Region",
      }}
      selectProps={{
        id: "example-dropdown",
        name: "example-dropdown",
        "aria-invalid": true,
      }}
      options={[
        { value: "", key: "default", text: "Vælg region" },
        { value: "hovedstaden", key: "hovedstaden", text: "Hovedstaden" },
        { value: "midtjylland", key: "midtjylland", text: "Midtjylland" },
        { value: "nordjylland", key: "nordjylland", text: "Nordjylland" },
        { value: "sjaelland", key: "sjaelland", text: "Sjælland" },
        { value: "syddanmark", key: "syddanmark", text: "Syddanmark" },
      ]}
      error="Vælg region"
    ></Dropdown>
  ),
};

export const InputFieldWithSuffix: Story = {
  render: () => (
    <InputField
      labelProps={{ children: "Pris i 1000 kr." }}
      error="Angiv en pris"
      suffix="000 kr."
      inputProps={{
        id: "price-error",
        name: "price-error",
      }}
    ></InputField>
  ),
};

export const InputFieldWithCharacterLimit: Story = {
  render: () => (
    <InputField
      labelProps={{ children: "Inputfelt med karakterbegrænsning" }}
      characterLimit={20}
      inputProps={{
        id: "char-limit-error",
        name: "char-limit-error",
      }}
    ></InputField>
  ),
};
