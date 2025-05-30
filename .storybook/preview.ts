import type { Preview } from "@storybook/react";
import "../src/stories/assets/dkfds/css/dkfds.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
