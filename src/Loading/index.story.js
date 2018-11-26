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
      <label>width & height</label>
      <Loading width={60} height={60} />
    </div>
  ))
);
