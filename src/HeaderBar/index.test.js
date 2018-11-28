import React from 'react';
import HeaderBar from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

import KudooThemeProvider, { theme } from '../config/theme';
import { I18nProvider } from 'lingui-react';
import toJson from 'enzyme-to-json';

it('renders HeaderBar', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <Router>
          <Route
            render={() => {
              return (
                <div>
                  <div style={{ marginTop: 15 }}>
                    <h4>Default</h4>
                    <HeaderBar headerLabel={'Dashboard'} />
                  </div>

                  <div style={{ marginTop: 100 }}>
                    <h4>Custom Label</h4>
                    <HeaderBar headerLabel={'Dashboard'} />
                  </div>
                </div>
              );
            }}
          />
        </Router>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
