import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  loadTranslations,
  resetTranslations,
  saveTranslations,
} from "./translations";
import { InputField } from "../../components/InputField/InputField";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Translations/TranslationEditor",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: () => {
    const [translations, setTranslations] = useState(() => loadTranslations());
    const updateTranslation = (key: string, value: string) => {
      const newTranslations = { ...translations, [key]: value };
      setTranslations(newTranslations);
      saveTranslations(newTranslations);
    };

    return (
      <div>
        <button onClick={resetTranslations}>🔄 Reset Translations</button>
        {Object.entries(translations).map(([key, val]) =>
          typeof val === "function" ? undefined : (
            <div key={key} className="mb-4">
              <InputField
                label={key}
                inputProps={{
                  value: val,
                  onChange: (e) => updateTranslation(key, e.target.value),
                  id: `translation-${key}`,
                  name: `translation-${key}`,
                }}
              />
            </div>
          ),
        )}
      </div>
    );
  },
};
