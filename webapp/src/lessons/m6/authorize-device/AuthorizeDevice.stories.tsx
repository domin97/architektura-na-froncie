import React, { useState } from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AuthorizeDeviceProcessPrimitive } from './hooks/AuthorizeDeviceProcessPrimitive'
import { AuthorizeDeviceProcessUnion } from './hooks/AuthorizeDeviceProcessUnion'
import { AuthorizeDeviceProcessReduxWithStore } from './redux/AuthorizeDeviceProcessRedux'
import { AuthorizeDeviceProcessXState } from './xstate/AuthorizeDeviceProcessXState'
import { tokenMockHandlers } from 'api/mock/token.mock';

import { Panel } from 'ui/layout';
import { Button } from 'ui/atoms';
import { Modal } from 'ui/molecules';


export default {
  title: 'Lessons/M6 State Machines/Authorize Device',
  parameters: {
    msw: tokenMockHandlers
  },
} as Meta;

const notify = action('notify')

type AuthorizeDeviceProcessComponent = React.FC<{
  onSuccess: () => void
  onLogout: () => void
}>

// story factory (HOC)
const generateInline = (Component: AuthorizeDeviceProcessComponent) => {
  return () => {
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
      { (status === "RUNNING") && <Component
        onSuccess={successFn}
        onLogout={logoutFn}
      /> }
    </Panel>
  }
}

export const _AuthorizeDeviceProcessPrimitive = generateInline(AuthorizeDeviceProcessPrimitive)
export const _AuthorizeDeviceProcessUnion = generateInline(AuthorizeDeviceProcessUnion)
export const _AuthorizeDeviceProcessRedux = generateInline(AuthorizeDeviceProcessReduxWithStore)
export const _AuthorizeDeviceProcessXState = generateInline(AuthorizeDeviceProcessXState)

export const InModal = () => {
  const [isRunning, setRunning] = useState(false)
  const start = () => { setRunning(true) }

  const successFn = () => {
    setRunning(false)
    notify('succeeded')
  }

  const logoutFn = () => {
    setRunning(false)
    notify('logged out')
  }

  return !isRunning
    ? <Button
        variant="PRIMARY"
        onClick={start}
      >add device</Button>
    : <Modal
        isOpen={isRunning}
        onRequestClose={logoutFn}
      >
        <AuthorizeDeviceProcessUnion
          onSuccess={successFn}
          onLogout={logoutFn}
        />
      </Modal>
}
