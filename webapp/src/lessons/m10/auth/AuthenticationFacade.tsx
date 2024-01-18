import React from 'react';

import App from 'App';
import { useAuth } from './AuthProvider';
import { Authenticate } from './Authenticate';

export const AuthenticationFacade = () => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <App /> : <Authenticate />
}
