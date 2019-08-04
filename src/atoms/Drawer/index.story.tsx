import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Drawer from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

storiesOf('Drawer', module).add(
  'Default',
  withInfo('Default')(() => (
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
                name: 'Invoice',
              },
              {
                name: 'Customers',
              },
              {
                name: 'Projects',
              },
            ]}
          />
        )}
      />
    </Router>
  ))
);
