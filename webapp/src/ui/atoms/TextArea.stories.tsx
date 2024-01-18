import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { TextArea } from './TextArea';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof TextArea>> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: "Text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  defaultValue: "Disabled",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  defaultValue: "Error",
};
