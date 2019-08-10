import React from 'react';
import Drawer from './index';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { I18nProvider } from '@lingui/react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

it('renders Drawer', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <Router>
          <Route
            render={() => (
              <Drawer
                companies={[
                  { id: 1, name: 'Kudoo', owner: true },
                  { id: 2, name: 'Facebook', owner: false },
                ]}
                selectedCompany={{ id: 1, name: 'Kudoo', owner: true }}
                onCompanyClick={() => {}}
                menuItems={[
                  {
                    menuItem: 'Invoice',
                  },
                  {
                    menuItem: 'Customers',
                  },
                  {
                    menuItem: 'Projects',
                  },
                ]}
              />
            )}
          />
        </Router>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
