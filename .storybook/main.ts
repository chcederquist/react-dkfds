import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../node_modules/dkfds/dist"],
  previewHead: (head) => `${head}
    <link rel="stylesheet" href="/css/dkfds.css" />
    `,
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  webpackFinal: async (config) => {
    const rule = config.module?.rules?.find(
      (r) => typeof r === "object" && r?.test?.toString().includes("svg"),
    );
    if (rule) {
      rule.resourceQuery = { not: [/svgr/] };
    }
    // Add SVGR loader
    config.module?.rules?.push({
      test: /\.svg$/,
      resourceQuery: /svgr/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            titleProp: true,
            ref: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      // Prevent stripping content
                      removeViewBox: false,
                      cleanupIDs: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
      issuer: /\.[jt]sx?$/, // Apply only for JS/TS
    });

    return config;
  },
};
export default config;
