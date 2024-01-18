import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { DropdownField } from './DropdownField';

export default {
  title: 'Molecules/DropdownField',
  component: DropdownField,
  argTypes: {
    onChange: { action: 'change' },
    items: { control: 'object' },
  },
  args: {
    id: "DropdownField-sample",
    layoutDirection: "horizontal",
    items: {},
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof DropdownField>> =
  (args) => <DropdownField {...args} />;


export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};

export const IncludeEmpty = Template.bind({});
IncludeEmpty.args = {
  label: 'Include empty',
  includeEmpty: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  error: "Musisz wybrać wartość"
};
