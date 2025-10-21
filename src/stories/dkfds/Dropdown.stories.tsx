import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../../components/Dropdown/Dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainDropdown: Story = {
  args: {
    labelProps: {
      children: "Region",
    },
    selectProps: {
      id: "example-dropdown",
      name: "example-dropdown",
    },
    options: [
      { value: "", key: "default", text: "Vælg region" },
      { value: "hovedstaden", key: "hovedstaden", text: "Hovedstaden" },
      { value: "midtjylland", key: "midtjylland", text: "Midtjylland" },
      { value: "nordjylland", key: "nordjylland", text: "Nordjylland" },
      { value: "sjaelland", key: "sjaelland", text: "Sjælland" },
      { value: "syddanmark", key: "syddanmark", text: "Syddanmark" },
    ],
  },
};

export const ErrorDropdown: Story = {
  args: {
    labelProps: {
      children: "Region",
    },
    selectProps: {
      id: "example-dropdown",
      name: "example-dropdown",
      "aria-invalid": true,
    },
    options: [
      { value: "", key: "default", text: "Vælg region" },
      { value: "hovedstaden", key: "hovedstaden", text: "Hovedstaden" },
      { value: "midtjylland", key: "midtjylland", text: "Midtjylland" },
      { value: "nordjylland", key: "nordjylland", text: "Nordjylland" },
      { value: "sjaelland", key: "sjaelland", text: "Sjælland" },
      { value: "syddanmark", key: "syddanmark", text: "Syddanmark" },
    ],
    error: "Vælg region",
  },
};

export const DisabledDropdown: Story = {
  args: {
    labelProps: {
      children: "Region",
    },
    selectProps: {
      id: "example-dropdown",
      name: "example-dropdown",
    },
    disabled: true,
    options: [
      { value: "", key: "default", text: "Vælg region" },
      { value: "hovedstaden", key: "hovedstaden", text: "Hovedstaden" },
      { value: "midtjylland", key: "midtjylland", text: "Midtjylland" },
      { value: "nordjylland", key: "nordjylland", text: "Nordjylland" },
      { value: "sjaelland", key: "sjaelland", text: "Sjælland" },
      { value: "syddanmark", key: "syddanmark", text: "Syddanmark" },
    ],
  },
};
