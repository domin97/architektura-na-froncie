/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';

import { Meta } from '@storybook/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { EmployeesView } from './EmployeesView';


export default {
  title: 'Lessons/M4 Hooks & Contexts/React Query',
} as Meta;

export const _EmployeePlans = () => {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
    <EmployeesView />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}
