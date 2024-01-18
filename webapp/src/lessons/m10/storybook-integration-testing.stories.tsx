import React, { useState } from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AuthorizeDeviceProcessUnion } from 'lessons/m6/authorize-device/hooks/AuthorizeDeviceProcessUnion'

import { Panel } from 'ui/layout';
import { Button } from 'ui/atoms';


export default {
  title: 'Lessons/M10 End-to-end Testing/Storybook Integration Testing',
} as Meta;

const notify = action('notify')

export const AuthorizeDeviceWithRealHTTP = () => {
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
    { (status === "RUNNING") && <AuthorizeDeviceProcessUnion
      onSuccess={successFn}
      onLogout={logoutFn}
    /> }
  </Panel>
}
