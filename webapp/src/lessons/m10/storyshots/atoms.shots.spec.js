import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { delay } from 'lib/async';
import { getMatchOptions } from './config';

initStoryshots({
  suite: 'Atoms DOM storyshots',
  storyKindRegex: /^Atoms/,
});

initStoryshots({
  suite: 'Atoms Visual storyshots',
  storyKindRegex: /^Atoms/,
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    getMatchOptions,
    // Wait before making a snapshot to mitigate:
    // ProtocolError: Protocol error (Page.captureScreenshot): Cannot take screenshot with 0 width.
    beforeScreenshot: () => delay(600),
  })
});
