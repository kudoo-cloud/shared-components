import React from 'react';
import HeaderBar from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import KudooThemeProvider, { theme } from 'components/config/theme';
import { I18nProvider } from '@lingui/react';
import toJson from 'enzyme-to-json';

it('renders HeaderBar', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <Router>
          <Route
            render={() => {
              return (
                <div>
                  <div style={{ marginTop: 15 }}>
                    <h4>Default</h4>
                    <HeaderBar
                      headerLabel={'Dashboard'}
                      profile={{ firstName: 'John', lastName: 'Doe' }}
                      noOfDAOs={1}
                      onSelectProduct={(index, data) => {
                        console.log({ index, data });
                      }}
                      products={[
                        {
                          key: 'inventory',
                          value: 'INVENTORY',
                        },
                        {
                          key: 'finance',
                          value: 'FINANCE',
                        },
                        {
                          key: 'health',
                          value: 'HEALTH',
                        },
                      ]}
                    />
                  </div>

                  <div style={{ marginTop: 100 }}>
                    <h4>Custom Label</h4>
                    <HeaderBar
                      headerLabel={'Dashboard'}
                      profile={{ firstName: 'John', lastName: 'Doe' }}
                      noOfDAOs={1}
                      products={[
                        {
                          key: 'inventory',
                          value: 'INVENTORY',
                        },
                        {
                          key: 'finance',
                          value: 'FINANCE',
                        },
                        {
                          key: 'health',
                          value: 'HEALTH',
                        },
                      ]}
                      initialSelectedProductIndex={2}
                    />
                  </div>
                </div>
              );
            }}
          />
        </Router>
      </KudooThemeProvider>
    </I18nProvider>,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
