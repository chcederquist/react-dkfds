import type { Preview } from "@storybook/react";
import BaseSVG from "/node_modules/dkfds/dist/img/all-svg-icons.svg?svgr";
import { DkfdsTranslationProvider } from "../src/contexts/translation-context";
import { loadTranslations } from "../src/stories/translations/translations";

const withSVGHeader = (Story) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  decorators: [withSVGHeader],
};

export default preview;
