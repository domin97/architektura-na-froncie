import React, { useState } from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AuthorizeDeviceProcessMobx as AuthorizeDeviceProcess } from './AuthorizeDeviceProcessMobx'
import { AuthorizeDeviceStore } from './store/AuthorizeDeviceStore';
import { tokenMockHandlers } from 'api/mock/token.mock';

import { Panel } from 'ui/layout';
import { Button } from 'ui/atoms'


export default {
  title: 'Lessons/M8 Reactive/MobX',
  parameters: {
    msw: tokenMockHandlers
  },
  argTypes: {}
} as Meta;

const notify = action('notify')

// no boolean obsession
export const AuthorizeDevice = () => {
  const [status, setStatus] = useState<"CLEAN" | "RUNNING" | "SUCCESS" | "LOGGED_OUT">("CLEAN")
  const start = () => { setStatus("RUNNING") }

  const successFn = () => {
    setStatus("SUCCESS")
    notify('succeeded')
  }

  const logoutFn = () => {
    setStatus("LOGGED_OUT")
    notify('logged out')
  }

  return <Panel>
    { (status === "SUCCESS") && <div>authorization succeeded</div> }
    { (status === "LOGGED_OUT") && <div>logged out</div> }
    {!(status === "RUNNING")
    ? <Button
        variant="PRIMARY"
        onClick={start}
      >autoryzuj urządzenie</Button>
    : <AuthorizeDeviceProcess
        onSuccess={successFn}
        onLogout={logoutFn}
        store={new AuthorizeDeviceStore()}
      />}
  </Panel>
}
