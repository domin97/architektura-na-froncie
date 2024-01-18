import "../src/styles/fonts.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Atoms', 'Molecules', 'Organisms', 'Lessons',
          'Account', 'Authorize Device', 'Change Limits', 'Exams',
          'Auth', 'Currency Exchange',
        ],
        method: 'numeric',
      },
    },
  },
};

export default preview;

// M7 INTEGRATION TESTING
// msw-storybook-addon

import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({ onUnhandledRequest: 'bypass' });

// M9 ERROR HANDLING
// decorators

import React from 'react';
import { ErrorScreenProvider } from '../src/lessons/m9/error-ui'
import { LoggerProvider } from '../src/lessons/m9/logger';
import { StorybookLogger } from '../src/lessons/m9/logger/Logger.storybook';

export const decorators = [
  mswDecorator,
  (Story) => <ErrorScreenProvider><Story/></ErrorScreenProvider>,
  (Story) => <LoggerProvider logger={StorybookLogger} ><Story/></LoggerProvider>,
];
