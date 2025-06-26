import type { Meta, StoryObj } from "@storybook/react";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/LanguagePicker",
  component: LanguagePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof LanguagePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainLanguagePicker: Story = {
  args: {
    languages: [
      {
        isCurrentLanguage: true,
        languageSelectedLabel: "Dansk",
        languageCode: "da",
        label: "Dansk",
      },
      {
        isCurrentLanguage: false,
        languageSelectedLabel: "English",
        languageCode: "en",
        label: "English",
      },
      {
        isCurrentLanguage: false,
        languageSelectedLabel: "Svenska",
        languageCode: "sv",
        label: "Svenska",
      },
    ],
    queryParameterName: "lang",
  },
};
