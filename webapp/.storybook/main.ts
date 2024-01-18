import type { StorybookConfig } from "@storybook/react-webpack5";
import globby from "globby";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";

const config: StorybookConfig = {
  // https://github.com/storybookjs/storybook/issues/11181
  stories: globby.sync(["../src/**/*.stories.@(js|jsx|ts|tsx)", "!../src/**/node_modules/**/*"], { cwd: "./.storybook" }),
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    "../public",
  ],
  features: {
    legacyMdx1: true,
  },
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config

    // BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
    config.plugins!.push(new NodePolyfillPlugin());

    // Overrides for lessons/m3/homework/contacts
    Object.assign(config.resolve!.alias!, {
      "react": path.resolve(__dirname, "../node_modules/react"),
      "react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
    });

    // Ignore watching output files of e2e tests
    config.watchOptions!.ignored = [
      "**/node_modules",
      path.resolve(__dirname, "../src/lessons/m10/backstop_data"),
      path.resolve(__dirname, "../src/lessons/m10/cypress"),
      path.resolve(__dirname, "../src/lessons/m10/puppeteer"),
      path.resolve(__dirname, "../src/lessons/m10/storyshots"),
    ];

    return config;
  },
};
export default config;
