import React from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ChangeLimitsProcess } from './ChangeLimitsProcess';
import { limitsMockHandlers, tokenMockHandlers } from 'api/mock';


export default {
  title: 'Lessons/M6 State Machines/Change Limits',
  parameters: {
    // W module m7 wprowadzone zostało msw, aby story nie wysyłało prawdziwych żądań HTTP,
    // żeby wyeliminować trochę chorą zależność, że storybook wymaga odpalonej apki.
    // Można zakomentować poniższą linię, żeby wyłączyć msw i komunikować się bezpośrednio z api.
    msw: [...tokenMockHandlers, ...limitsMockHandlers]
  },
  argTypes: {}
} as Meta;

const notify = action('notify')

export const _ChangeLimitsProcessMachine = () => {
  const successFn = () => {
    notify('succeeded')
  }

  const cancelFn = () => {
    notify('cancelled')
  }

  return <ChangeLimitsProcess
    onSuccess={successFn}
    onCancel={cancelFn}
  />
}
