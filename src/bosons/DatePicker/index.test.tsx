import React from 'react';
import DatePicker from './index';
import renderer from 'react-test-renderer';
import KudooThemeProvider, { theme } from 'components/config/theme';
import { I18nProvider } from '@lingui/react';

import toJson from 'enzyme-to-json';

it('renders DatePicker', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <div style={{ width: 500 }}>
          <h4>default</h4>
          <DatePicker />
          <h4>custom button color</h4>
          <DatePicker buttonColor="#2bc88f" />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
