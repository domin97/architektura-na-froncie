/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';

import { Meta } from '@storybook/react';

import { EmployeesView } from './EmployeesView';


export default {
  title: 'Lessons/M3 React/HOMEWORK',
} as Meta;

export const _EmployeePlans = () => {
  return <EmployeesView />;
}
