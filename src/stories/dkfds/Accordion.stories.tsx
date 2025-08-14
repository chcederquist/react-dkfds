import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../components/Accordion/Accordion";
import { Alert } from "../../components/Alert/Alert";

const meta = {
  title: "DKFDS/Accordions",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainAccordion: Story = {
  args: {
    hasOpenCloseAllButton: false,
    accordionElements: [
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Lorem ipsum dolor sit amet",
        },
        id: "accordion-1",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Consectetur adipiscing elit",
        },
        id: "accordion-2",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Sed do eiusmod tempor",
        },
        id: "accordion-3",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Labore et dolore magna",
        },
        id: "accordion-4",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
};

export const Fejlmeddelelse: Story = {
  args: {
    accordionElements: [
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Lorem ipsum dolor sit amet",
        },
        id: "accordion-1",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          icon: {
            text: "Fejl",
            iconName: "error",
          },
          children: "Consectetur adipiscing elit",
        },
        id: "accordion-2",
        error: true,
        alertId: "error-message-accordion-2",
        children: (
          <>
            <Alert id={"error-message-accordion-2"} type="error">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Alert>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </>
        ),
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Sed do eiusmod tempor",
          icon: {
            text: "Advarsel",
            iconName: "warning",
          },
        },
        id: "accordion-3",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Labore et dolore magna",
        },
        id: "accordion-4",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
};

export const AabnLukAlle: Story = {
  name: "Åbn/luk alle",
  args: {
    hasOpenCloseAllButton: true,
    accordionElements: [
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Lorem ipsum dolor sit amet",
        },
        id: "accordion-1",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Consectetur adipiscing elit",
        },
        id: "accordion-2",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Sed do eiusmod tempor",
        },
        id: "accordion-3",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Labore et dolore magna",
        },
        id: "accordion-4",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
};

export const MedSuccesbeskeder: Story = {
  args: {
    accordionElements: [
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Lorem ipsum dolor sit amet",
        },
        id: "accordion-1",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Consectetur adipiscing elit",
        },
        id: "accordion-2",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Sed do eiusmod tempor",
          icon: {
            text: "Succes",
            iconName: "success",
          },
        },
        id: "accordion-3",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        headerContent: {
          headingProps: { level: "h2" },
          children: "Labore et dolore magna",
        },
        id: "accordion-4",
        children:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
};
