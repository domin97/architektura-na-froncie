import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { CheckboxField } from './CheckboxField';

export default {
  title: 'Molecules/CheckboxField',
  component: CheckboxField,
  argTypes: {
    onChange: { action: 'change' },
  },
  args: {
    id: "checkbox-sample",
    label: "I agree to Terms of Conditions",
  }
} as Meta;

const Template: StoryFn<ComponentProps<typeof CheckboxField>> =
  (args) => <CheckboxField {...args} />;

export const Empty = Template.bind({});
Empty.args = {
};

export const Default = Template.bind({});
Default.args = {
  defaultChecked: true,
  label: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  defaultChecked: true,
  label: 'Disabled',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  error: "Musisz wyrazić zgodę"
};
