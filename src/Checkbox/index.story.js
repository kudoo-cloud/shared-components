import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CheckBox from './index';

storiesOf('CheckBox', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <h4>Default</h4>
      <CheckBox label="Text" />
      <h4>Disabled</h4>
      <CheckBox disabled label="Text" />
      <h4>Predefined checked</h4>
      <CheckBox value={true} label="Text" />
      <h4>Custom color</h4>
      <CheckBox value={true} color="green" label="Text" />
      <h4>With Error</h4>
      <CheckBox value={true} label="Text" error="Error Message" />
    </div>
  ))
);
