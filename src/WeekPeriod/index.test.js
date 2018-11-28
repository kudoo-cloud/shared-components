import React from 'react';
import WeekPeriod from './index';
import renderer from 'react-test-renderer';
import KudooThemeProvider, { theme } from '../config/theme';
import { I18nProvider } from 'lingui-react';

import toJson from 'enzyme-to-json';

it('renders WeekPeriod', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <WeekPeriod onWeekChange={() => {}} />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
