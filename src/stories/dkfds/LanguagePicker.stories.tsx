import type { Meta, StoryObj } from "@storybook/react";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";

const meta = {
  title: "DKFDS/LanguagePicker",
  component: LanguagePicker,
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
