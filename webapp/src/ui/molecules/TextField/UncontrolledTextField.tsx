import React, { useRef } from 'react';

import { Input } from 'ui/atoms';
import { FormField } from '../FormField';
import { TextFieldProps } from './TextField';

export const UncontrolledTextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { id, label, layoutDirection = "horizontal", placeholder, defaultValue, disabled, error, noMargin } = props
  // 🔥 a jeśli nie ma forwardRef (nie propagujemy refa do góry), to useRef (tworzymy refa lokalnie):
  const ref_ = useRef<HTMLInputElement>(null)

  return (
    <FormField
      label={label}
      htmlFor={id}
      error={error}
      layoutDirection={layoutDirection}
      noMargin={noMargin}
    >
      <Input
        type="input"
        id={id}
        ref={ref_}
        data-testid={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      />
    </FormField>
  );
})

// const el =  <UncontrolledTextField ref={} />