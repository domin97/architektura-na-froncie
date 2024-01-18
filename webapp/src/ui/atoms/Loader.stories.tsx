import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'Atoms',
  component: Loader,
  argTypes: {
    fillColor: { control: "color" }
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof Loader>> = (args) => <Loader {...args} />;

export const _Loader = Template.bind({});
_Loader.args = {};
