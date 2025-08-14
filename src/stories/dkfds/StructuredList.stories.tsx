import type { Meta, StoryObj } from "@storybook/react";
import { StructuredList } from "../../components/Table/StructuredList";
import { ScreenReaderLabel } from "../../components/ScreenReaderLabel/ScreenReaderLabel";

const meta = {
  title: "DKFDS/StructuredList",
  component: StructuredList,
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
