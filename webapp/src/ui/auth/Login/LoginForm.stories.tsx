import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  title: 'Auth/LoginForm',
  component: LoginForm,
  argTypes: {
    onSubmit: { action: 'submit' },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof LoginForm>> =
  (args) => <LoginForm {...args} />;

export const Standard = Template.bind({});
Standard.args = {
};
