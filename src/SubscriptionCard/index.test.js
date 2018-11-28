import React from 'react';
import Card from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from '../config/theme';
import toJson from 'enzyme-to-json';

it('renders SubscriptionCard', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <div style={{ margin: 10, width: 250 }}>
            <Card
              type="Free"
              price={'$20'}
              period={'per month'}
              shortDescription={'This offer is free for 24months'}
            />
          </div>
          <div style={{ margin: 10, width: 250 }}>
            <Card
              type="Open Source"
              highlighted={true}
              price={'Free'}
              period={'per month'}
              shortDescription={'This offer is free for 24months'}
            />
          </div>
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
