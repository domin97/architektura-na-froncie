/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';

import { Meta } from '@storybook/react';

import { getStore } from './store';
import { EmployeesView } from './components/EmployeesView';


export default {
  title: 'Lessons/M5 Redux/Employee Plans',
} as Meta;

import { Provider } from 'react-redux';
const store = getStore()
export const _EmployeePlans = () => {
  return <Provider store={store}>
    <EmployeesView />
  </Provider>
}
