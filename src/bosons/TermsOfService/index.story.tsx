import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TermsOfService from './index';

storiesOf('TermsOfService', module).add(
  'Default',
  withInfo('Default')(() => (
    <div>
      <div style={{ margin: 10 }}>
        <TermsOfService />
      </div>
    </div>
  ))
);
