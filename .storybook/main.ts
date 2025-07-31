import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../node_modules/dkfds/dist"],
  previewHead: (head) => `${head}
    <link rel="stylesheet" href="/css/dkfds.css" />
    `,
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        svgr({
          svgrOptions: {
            svgo: true,
            titleProp: true,
            ref: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                      cleanupIDs: false,
                    },
                  },
                },
              ],
            },
          },
          // Only apply SVGR when importing like ?svgr
          include: "**/*.svg?svgr",
        }),
      ],
      // optional: fallback to default asset handling for other SVGs
      assetsInclude: ["**/*.svg"],
    });
  },
};
export default config;
