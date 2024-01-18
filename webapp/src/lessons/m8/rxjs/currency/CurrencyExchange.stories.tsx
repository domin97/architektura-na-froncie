import React, { useState } from 'react';

import { Meta } from '@storybook/react';


import { CurrencyExchangeView } from 'ui/currency-exchange/CurrencyExchangeView';

export default {
  title: 'Lessons/M8 Reactive/RxJS',
  argTypes: {}
} as Meta;

export const CurrencyExchange = () => {
  const props = {
    usdRate: 4.0057,
    eurRate: 4.2311,
    gbpRate: 5.5966,
    chfRate: 3.9725,
  }

  return <CurrencyExchangeView {...props} />
}

export const CurrencyExchangeWithDelta = () => {
  const props = {
    usdRate: 4.0057,
    usdDelta: -0.013,
    eurRate: 4.2311,
    eurDelta: 0,
    gbpRate: 5.5966,
    gbpDelta: 0.0012,
    chfRate: 3.9725,
    chfDelta: 0,
  }

  return <CurrencyExchangeView {...props} />
}
