import React from 'react';

import { Meta } from '@storybook/react';

import { transfersJSON } from 'api/mock/transfers.mock'
import { AccountHistory } from 'ui/transfers/AccountHistory';
import { TransfersListing } from './TransfersListing';

export default {
  title: 'Account/Transfers',
  argTypes: {}
} as Meta;

export const _AccountHistory = () => {
  return <AccountHistory />
}

export const _TransfersListing = () => {
  return <TransfersListing transfers={transfersJSON} />
}
