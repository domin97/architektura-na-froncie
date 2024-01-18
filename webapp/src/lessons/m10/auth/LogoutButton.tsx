import React from 'react';
import { Button } from 'ui/atoms';

import { useAuth } from './AuthProvider';

export const LogoutButton = (props: { className?: string }) => {
  const { logout } = useAuth()
  return <Button
    data-testid="btn-logout"
    variant="OUTLINED"
    onClick={logout} className={props.className}
  >Wyloguj</Button>
}
