import React from 'react';
import Card from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from '../config/theme';
import DemoTable from './index.story';
import toJson from 'enzyme-to-json';

it('renders Table', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: '10px' }}>
          <DemoTable />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
