/* @flow */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import EmailInputFields from './index';

storiesOf('EmailInputFields', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <EmailInputFields onEmailChange={action('Email Change')} />
    </div>
  ))
);
