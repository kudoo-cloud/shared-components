import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Loading from './index';

storiesOf('Loading', module).add(
  'Default',
  withInfo('Default Loading Spinner')(() => (
    <div>
      <label>Default</label>
      <Loading />
      <label>Color</label>
      <Loading color={'#f00'} />
      <label>Size</label>
      <Loading size={60} />
    </div>
  ))
);
