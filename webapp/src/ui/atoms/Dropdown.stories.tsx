import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    items: { control: 'object' },
  },
  args: {
    items: { "foo": "Foo", "bar": "Bar", "baz": "Baz" },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof Dropdown>> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};
