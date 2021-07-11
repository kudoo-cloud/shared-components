import React from 'react';
import moment from 'moment';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TimehsheetRowDisplay from './index';

const startDay = '2018-06-10T00:00:00';
const endDay = '2018-06-16T00:00:00';
const project = {
  data: {
    id: '1',
    name: 'Sample Project',
  },
};

const customer = {
  data: {
    id: '1',
    name: 'Sample Customer',
  },
};

const service = {
  data: {
    id: '1',
    name: 'Sample Service',
  },
};

const entries = {
  data: range(0, 6).map(index => ({
    duration: Math.floor(Math.random() * 9 + 1),
    date: moment(startDay)
      .add(index, 'days')
      .format(),
  })),
};

storiesOf('TimehsheetRowDisplay', module).add(
  'Default',
  withInfo('Default')(() => (
    <div>
      <div style={{ margin: 10 }}>
        <TimehsheetRowDisplay
          project={project}
          startWeekDay={startDay}
          endWeekDay={endDay}
          service={service}
          timeSheetEntries={entries}
        />
        <TimehsheetRowDisplay
          hideDaysLabel
          customer={customer}
          startWeekDay={startDay}
          endWeekDay={endDay}
          service={service}
          timeSheetEntries={entries}
        />
      </div>
    </div>
  ))
);
