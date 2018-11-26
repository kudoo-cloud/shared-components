import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import RadioButton from './index';

storiesOf('RadioButton', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <h4>Default</h4>
      <RadioButton label="Text" />
      <h4>Disabled</h4>
      <RadioButton disabled label="Text" />
      <h4>Predefined checked</h4>
      <RadioButton value={true} label="Text" />
      <h4>Custom color</h4>
      <RadioButton value={true} color="green" label="Text" />
    </div>
  ))
);
