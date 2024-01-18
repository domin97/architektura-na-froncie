import React from 'react';

import { Meta } from '@storybook/react';

import { Typography } from './Typography';

const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

export default {
  title: 'Atoms',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    variant: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    },
    bold: {
      table: { disable: true }
    },
    noMargin: {
      table: { disable: true }
    },
  },
  args: {
    children: sampleText,
  },
} as Meta;

export const _Typography = ({ children }: React.PropsWithChildren) => {
  return <>
    <Typography variant="h1">h1. {children}</Typography>
    <Typography variant="h2">h2. {children}</Typography>
    <Typography variant="h3">h3. {children}</Typography>
    <Typography variant="h4">h4. {children}</Typography>
    <Typography variant="body">body. {children}</Typography>
    <Typography variant="bold">bold. {children}</Typography>
    <Typography variant="decorated">decorated. {children}</Typography>
  </>
}
