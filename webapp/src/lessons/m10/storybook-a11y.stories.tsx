import React from 'react';

import { Meta } from '@storybook/react';

import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';


import { Input, Typography } from 'ui/atoms';
export default {
  title: 'Lessons/M10 End-to-end Testing/Accessibility',
  argTypes: {
  },
} as Meta;

const buttonStyles = css`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 2px 2px;
  cursor: pointer;
`

const AccessibleButton = styled.button`
  ${buttonStyles}
  background-color: #83b900;
  color: black;
`
const InaccessibleButton = styled.button`
  ${buttonStyles}
  background-color: #83b900;
  color: white;
`

export const LowContrast = () => <>
  <AccessibleButton>Accessible button</AccessibleButton>
  <InaccessibleButton>Inaccessible button</InaccessibleButton>
</>

export const InputWithoutLabel = () => {
  return <Input id="text-input" value="tekst" onChange={action('change')} />

  // return (
  //   <label htmlFor="text-input"> tekst:
  //     <Input id="text-input" value="tekst" onChange={action('change')} />
  //   </label>
  // )

  // return <>
  //   <Typography variant="h3" id="someHeader">och co za nagłówek</Typography>
  //   <Input id="text-input" aria-labelledby="someHeader" value="tekst" onChange={action('change')} />
  // </>
}

export const MouseOnlyMenu = () => {
  return <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_hover">open mouse-only menu</a>
}
