import React from "react";
import type { Preview } from "@storybook/react";
import BaseSVG from "/src/stories/assets/dkfds/img/all-svg-icons.svg?svgr";
const withSVGHeader = (Story) => {
  return (
    <>
      <div style={{ display: "none" }}>
        <BaseSVG />
      </div>
      <Story />
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
