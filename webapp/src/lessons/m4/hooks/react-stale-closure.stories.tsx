import React, { useState } from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'ui/atoms';
import { delay } from 'lib/async';
import { randomBetween } from 'lib/random';


export default {
  title: 'Lessons/M4 Hooks & Contexts/Hooks',
  argTypes: {
  },
} as Meta;

const apiCall = () => delay(randomBetween(1000, 2000))

const updateAction = action('count')

export const ReactStaleClosure = () => {
  const [count, setCount] = useState(0)

  return <Button
    variant="PRIMARY"
    onClick={async () => {
      updateAction(count + 1)
      await apiCall()
      // 👉 setState / stale closure:
      setCount(count + 1)
      // 👉 setState with callback
      // setCount(c => c + 1)
    }}
  >current count: {count}</Button>
}
