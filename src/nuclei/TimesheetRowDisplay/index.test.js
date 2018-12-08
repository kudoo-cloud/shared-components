import React from 'react';
import TimehsheetRowDisplay from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

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

it('renders TimehsheetRowDisplay', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
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
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
