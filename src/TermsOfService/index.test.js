import React from 'react';
import TermsOfService from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from '../config/theme';
import toJson from 'enzyme-to-json';

it('renders TermsOfService', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <div style={{ margin: 10 }}>
            <TermsOfService />
          </div>
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
