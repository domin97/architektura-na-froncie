import React, { useState } from 'react';

import { Meta } from '@storybook/react';

import { GoogleTranslate } from './GoogleTranslate';


export default {
  title: 'Lessons/M3 React/Rendering',
  argTypes: {
  },
} as Meta;

class ClassComponent extends React.Component<{}, { checked: boolean }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      checked: false
    };
  }
  render() {
    return (
      <div>
        Check this checkbox:{" "}
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={e => this.setState({ checked: e.target.checked })}
        />
        <div id="parent">
          {!this.state.checked && "not checked"}
          <p>text</p>
        </div>
      </div>
    );
  }
}

const FunctionComponent = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      Check this checkbox:{" "}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(check => !check)}
      />
      <div id="parent">
        {!checked && "not checked"}
        <p>text</p>
      </div>
    </div>
  );
}

export const _GoogleTranslate = () => {
  return <>
    <pre>Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.</pre>
    <GoogleTranslate />
    <ClassComponent />
    <FunctionComponent />
    read more <a href="https://github.com/facebook/react/issues/11538#issuecomment-390386520" target="_blank" rel="noopener noreferrer">here</a>
  </>
}
