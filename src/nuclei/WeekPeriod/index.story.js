/** @flow **/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import WeekPeriod from './index';

storiesOf('WeekPeriod', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <WeekPeriod onWeekChange={action('onWeekChange')} />
    </div>
  ))
);
