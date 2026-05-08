import type { Meta, StoryObj } from "@storybook/react-vite";
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
        languageCode: "da",
        label: "Dansk",
      },
      {
        isCurrentLanguage: false,
        languageCode: "en",
        label: "English",
      },
      {
        isCurrentLanguage: false,
        languageCode: "sv",
        label: "Svenska",
      },
    ],
    queryParameterName: "lang",
  },
};
