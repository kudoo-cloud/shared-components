import React from 'react';
import SearchInput from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from '../config/theme';
import toJson from 'enzyme-to-json';

it('renders SearchInput', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <SearchInput
            placeholder={'Search by Company Name'}
            showClearIcon={false}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
