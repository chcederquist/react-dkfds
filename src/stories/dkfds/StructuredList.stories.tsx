import type { Meta, StoryObj } from "@storybook/react";
import { StructuredList } from "../../components/Table/StructuredList";
import { ScreenReaderLabel } from "../../components/ScreenReaderLabel/ScreenReaderLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/StructuredList",
  component: StructuredList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof StructuredList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainStructuredList: Story = {
  args: {
    items: [
      {
        title: "Navn",
        content: "Kirsten Mønster Jensen",
        key: "name",
      },
      {
        title: "Sagsnummer",
        content: "123.456",
        key: "caseNumber",
      },
      {
        title: "Dato",
        content: "04/05/2011",
        key: "date",
      },
      {
        title: "Beskrivelse",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        key: "description",
      },
    ],
  },
};

export const StructuredListWithEdit: Story = {
  args: {
    items: [
      {
        title: "Navn",
        content: "Kirsten Mønster Jensen",
        action: (
          <a href="#">
            Rediger<ScreenReaderLabel> navn</ScreenReaderLabel>
          </a>
        ),
        key: "name",
      },
      {
        title: "E-mail",
        content: "kirstenjensen@eksempel.dk",
        key: "email",
        action: (
          <a href="#">
            Rediger<ScreenReaderLabel> e-mail</ScreenReaderLabel>
          </a>
        ),
      },
      {
        title: "Telefonnummer",
        content: "12 34 56 78",
        key: "phone",
        action: (
          <a href="#">
            Rediger<ScreenReaderLabel> telefonnummer</ScreenReaderLabel>
          </a>
        ),
      },
    ],
  },
};
