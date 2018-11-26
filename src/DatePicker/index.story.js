import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DatePicker from './index';

storiesOf('DatePicker', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ padding: 10 }}>
      <div style={{ width: 500 }}>
        <h4>default</h4>
        <DatePicker />
        <h4>custom button color</h4>
        <DatePicker buttonColor="#2bc88f" />
        <h4>With Label</h4>
        <DatePicker label="Due Date" />
        <h4>Date Format</h4>
        <DatePicker label="Due Date" dateFormat="MMM YYYY" />
      </div>
    </div>
  ))
);
