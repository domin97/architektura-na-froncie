import React from 'react';

import { useAuth } from './AuthProvider';
import { LoginForm } from 'ui/auth/Login/LoginForm';

interface AuthenticateProps {}

export const Authenticate = (props: AuthenticateProps) => {
  const { login, error } = useAuth()
  return <LoginForm onSubmit={login}
    {...(error ? { error: "Nieprawidłowy login lub hasło" } : {})}
  />
}
