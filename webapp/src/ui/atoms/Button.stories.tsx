import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    disabled: { control: 'boolean' },
    variant: {
      table: {
        disable: true
      }
    }
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "PRIMARY",
  children: "Primary action",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "SECONDARY",
  children: "Secondary action",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "PRIMARY",
  disabled: true,
  children: "Primary action",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "OUTLINED",
  children: "Outlined action",
};
