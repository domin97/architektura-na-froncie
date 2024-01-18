import React, { useState } from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AuthorizeDeviceWithErrorHandling } from './AuthorizeDeviceWithErrorHandling'
import { ChangeLimitsWithErrorHandling } from './HOMEWORK-ChangeLimitsWithErrorHandling';
// import { tokenMockHandlers } from 'api/mock/token.mock';
// import { limitsMockHandlers } from 'api/mock/limit.mock';

import { Panel } from 'ui/layout';
import { Button } from 'ui/atoms';


export default {
  title: 'Lessons/M9 Error handling/Process Error Handling',
  // parameters: {
  //   msw: [...tokenMockHandlers, ...limitsMockHandlers]
  // },
} as Meta;

const notify = action('notify')

export const _AuthorizeDeviceWithErrorHandling = () => {
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
    { (status !== "RUNNING") && <Button
        data-testid="btn-authorize-device"
        variant="PRIMARY"
        onClick={start}
      >autoryzuj urządzenie</Button>
    }
    { (status === "RUNNING") && <AuthorizeDeviceWithErrorHandling
      onSuccess={successFn}
      onLogout={logoutFn}
    /> }
  </Panel>
}

export const _ChangeLimitsWithErrorHandling = () => {
  const successFn = () => {
    notify('succeeded')
  }

  const cancelFn = () => {
    notify('cancelled')
  }

  return <ChangeLimitsWithErrorHandling
    onSuccess={successFn}
    onCancel={cancelFn}
  />
}
