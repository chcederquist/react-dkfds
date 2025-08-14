import type { Meta, StoryObj } from "@storybook/react";
import { DateFields } from "../../components/DateFields/DateFields";

const meta = {
  title: "DKFDS/DateFields",
  component: DateFields,
} satisfies Meta<typeof DateFields>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainDateFields: Story = {
  args: {
    dayInputProps: {
      id: "dag-story-main",
      name: "day",
    },
    monthInputProps: {
      id: "måned-story-main",
      name: "month",
    },
    yearInputProps: {
      id: "år-story-main",
      name: "year",
    },
    id: "date-fields-story-main",
    legendProps: {
      children: "Indsendelsesfrist",
    },
    hint: "For eksempel: 05 12 2018",
  },
};

export const ErroredDateFields: Story = {
  args: {
    dayInputProps: {
      id: "dag-story-error",
      name: "day",
    },
    monthInputProps: {
      id: "måned-story-error",
      name: "month",
    },
    yearInputProps: {
      id: "år-story-error",
      name: "year",
    },
    id: "date-fields-story-error",
    legendProps: {
      children: "Hvornår blev dit pas udstedt?",
    },
    error: "Datoen kan ikke være i fremtiden.",
    hint: "For eksempel: 05 12 2018",
  },
};
