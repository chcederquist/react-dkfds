import type { Preview } from "@storybook/react";
import BaseSVG from "/node_modules/dkfds/dist/img/all-svg-icons.svg?svgr";
import { DkfdsTranslationProvider } from "../src/contexts/translation-context";
import { loadTranslations } from "../src/stories/translations/translations";

const withSVGHeader = (Story) => {
  const translations = loadTranslations();

  return (
    <>
      <div style={{ display: "none" }}>
        <BaseSVG />
      </div>
      <DkfdsTranslationProvider translations={translations}>
        <Story />
      </DkfdsTranslationProvider>
    </>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    layout: "centered",

    backgrounds: {
      grid: {
        opacity: 0.1,
      },
    },

    a11y: {
      test: "error",
    },
  },
  decorators: [withSVGHeader],
  tags: ["autodocs"],
  initialGlobals: {
    backgrounds: {
      grid: true,
    },
  },
};

export default preview;
