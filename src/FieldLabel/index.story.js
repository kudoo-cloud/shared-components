import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FieldLabel from './index';

storiesOf('FieldLabel', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ padding: 10 }}>
      <div style={{ width: 500 }}>
        <h4>default</h4>
        <FieldLabel label="Email" />
        <h4>label with extra link</h4>
        <FieldLabel label="Email" extraLinkWithLabel="Extra Link" />
      </div>
    </div>
  ))
);
