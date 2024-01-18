import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Editor } from './Editor';

export default {
  title: 'Molecules/Editor',
  component: Editor,
  argTypes: {},
} as Meta;

const Template: StoryFn<ComponentProps<typeof Editor>> =
  (args) => <Editor {...args} />;

export const Standard = Template.bind({});
Standard.args = {
};
