import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Drawer from './index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

storiesOf('Drawer', module).add(
  'Default',
  withInfo('Default')(() => (
    <Router>
      <Route
        render={() => (
          <Drawer
            daos={[
              { id: 1, name: 'Kudoo', owner: true },
              { id: 2, name: 'Facebook', owner: false },
            ]}
            selectedDAO={{ id: 1, name: 'Kudoo', owner: true }}
            onDAOClick={() => {}}
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
  )),
);
