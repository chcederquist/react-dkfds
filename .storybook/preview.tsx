import type { Decorator, Preview } from "@storybook/react-vite";
import BaseSVG from "/node_modules/dkfds/dist/img/all-svg-icons.svg?svgr";
const withSVGHeader: Decorator = (Story) => {
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
