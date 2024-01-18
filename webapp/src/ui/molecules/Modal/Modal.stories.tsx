import React, { ComponentProps } from 'react';

import { StoryFn, Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Modal } from './Modal';
import { Button, Typography } from 'ui/atoms';

export default {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    isOpen: { type: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof Modal>> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <Modal {...args} onRequestClose={() => updateArgs({ isOpen: false })}>
      <Typography variant="h1">Modal title</Typography>
      <Typography variant="body">Modal body goes here.</Typography>
      <Button variant="PRIMARY">Click me!</Button>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
