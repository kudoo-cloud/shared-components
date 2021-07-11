import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DottedCreateButton from './index';

storiesOf('DottedCreateButton', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10, width: 250 }}>
      <h4>Default</h4>
      <DottedCreateButton text="Create new DAO" />
      <h4>Custom Text/Icon Color </h4>
      <DottedCreateButton
        text="Join new DAO"
        textColor={'green'}
        iconColor={'red'}
      />
    </div>
  )),
);
