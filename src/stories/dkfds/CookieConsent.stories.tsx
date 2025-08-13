import type { Meta, StoryObj } from "@storybook/react";
import { CookieConsent } from "../../components/CookieConsent/CookieConsent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/CookieConsent",
  component: CookieConsent,
  argTypes: {
    children: { type: "function" },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainCookieConsent: Story = {
  args: {
    headingProps: {
      level: "h2",
      children: "Fortæl os om du accepterer cookies",
    },
    acceptButtonProps: {
      onClick: () => {
        console.log("Cookies accepted");
      },
      children: "Accepter cookies",
    },
    declineButtonProps: {
      onClick: () => {
        console.log("Cookies declined");
      },
      children: "Nej tak til cookies",
    },
    children: (
      <>
        Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data
        anonymiseres. <a href="#">Læs mere om vores brug af cookies.</a>
      </>
    ),
  },
};
