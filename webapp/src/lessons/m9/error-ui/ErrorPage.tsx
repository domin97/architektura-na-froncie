import React from 'react';

import { ErrorContent } from './ErrorContent';
import { UserErrorMessage } from './messages';

interface ErrorPageProps {
  errorMessage: UserErrorMessage
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { errorMessage } = props

  return <ErrorContent message={errorMessage} />
}
