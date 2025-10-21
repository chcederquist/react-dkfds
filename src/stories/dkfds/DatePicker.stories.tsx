import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "../../components/DatePicker/DatePicker";

const meta = {
  title: "DKFDS/DatePicker",
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainDatePicker: Story = {
  args: {
    inputProps: {
      id: "example-input",
      name: "example-input",
      required: true,
    },
    labelProps: { children: "Dato for aftale" },
  },
};

export const DatePickerWithInterval: Story = {
  args: {
    inputProps: {
      id: "example-input2",
      name: "example-input2",
      required: true,
    },
    labelProps: { children: "Dato for aftale" },
    minDate: new Date("2020-12-04"),
    maxDate: new Date("2024-12-24"),
  },
};

export const DatePickerWithDefaultValue: Story = {
  args: {
    inputProps: {
      id: "example-input3",
      name: "example-input3",
      required: true,
    },
    labelProps: { children: "Dato for aftale" },
    defaultDate: new Date("2020-12-01"),
  },
};

export const DatePickerWithDateFormat: Story = {
  args: {
    inputProps: {
      id: "example-input3",
      name: "example-input3",
      required: true,
    },
    labelProps: { children: "Datoeksempel med bindestreger" },
    hint: "Valgte datoer vises i formatet DD-MM-ÅÅÅÅ",
    dateFormat: "DD-MM-YYYY",
  },
};

export const DatePickerWithError: Story = {
  args: {
    inputProps: {
      id: "example-input3",
      name: "example-input3",
      required: true,
    },
    labelProps: { children: "Datoeksempel med bindestreger" },
    error: "Vælg en dato",
  },
};
