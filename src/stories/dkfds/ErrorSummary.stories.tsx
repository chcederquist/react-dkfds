import { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Heading } from "../../components/Shared/Heading";
import { InputField } from "../../components/InputField/InputField";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons";
import { DateFields } from "../../components/DateFields/DateFields";
import { Alert } from "../../components/Alert/Alert";
import { FunctionalLink } from "../../components/FunctionalLink/FunctionalLink";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/ErrorSummary",
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
    <>
      <nav aria-labelledby="error-summary">
        <Alert
          id="error-summary"
          iconAriaLabel="Fejl"
          type="error"
          alertTextAs="div"
          heading={{ level: "h2", children: "Der er problemer" }}
        >
          <ul className="alert-text nobullet-list">
            <li>
              <FunctionalLink as="a" href="#example-name-error">
                Skriv dit fulde navn, og adskil for- og efternavne med
                mellemrum, fx Anders Andersen
              </FunctionalLink>
            </li>
            <li>
              <FunctionalLink as="a" href="#option1">
                Angiv om du er dansk, svensk eller anden nationalitet
              </FunctionalLink>
            </li>
            <li>
              <FunctionalLink as="a" href="#dag-story-error">
                Datoen kan ikke være i fremtiden
              </FunctionalLink>
            </li>
          </ul>
        </Alert>
      </nav>
      <Heading level="h1">Oplysninger om dig</Heading>
      <form>
        <InputField
          inputProps={{ id: "example-name-error", name: "example-name-error" }}
          labelProps={{ children: "Hvad er dit fulde navn?" }}
          error="Skriv dit fulde navn, og adskil for- og efternavne med mellemrum, fx Anders Andersen"
        ></InputField>
        <RadioButtons
          legendProps={{ children: "Sagen handler om" }}
          id="radio-buttons-error"
          name="radio-buttons-error"
          options={[
            { id: "option1", value: "option1", label: "Mulighed 1" },
            { id: "option2", value: "option2", label: "Mulighed 2" },
            { id: "option3", value: "option3", label: "Mulighed 3" },
          ]}
          error="Væl hvad sagen handler om"
        ></RadioButtons>
        <DateFields
          dayInputProps={{
            id: "dag-story-error",
            name: "day",
            value: "01",
            onChange: fn(),
          }}
          monthInputProps={{
            id: "måned-story-error",
            name: "month",
            value: "12",
            onChange: fn(),
          }}
          yearInputProps={{
            id: "år-story-error",
            name: "year",
            value: "2076",
            onChange: fn(),
          }}
          id="date-fields-story-error"
          legendProps={{
            children: "Hvornår blev dit pas udstedt?",
          }}
          error="Datoen kan ikke være i fremtiden"
          hint={"For eksempel: 05 12 2018"}
        ></DateFields>
      </form>
    </>
  ),
};
