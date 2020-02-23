import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderBar from './index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

storiesOf('HeaderBar', module).add('Default', () => (
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
                noOfCompanies={1}
                onSelectProduct={(index, data) => {
                  console.log({ index, data });
                }}
                products={[
                  {
                    key: 'Inventory',
                    value: 'INVENTORY',
                  },
                  {
                    key: 'Finance',
                    value: 'FINANCE',
                  },
                  {
                    key: 'Health',
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
                noOfCompanies={1}
                products={[
                  {
                    key: 'Inventory',
                    value: 'INVENTORY',
                  },
                  {
                    key: 'Finance',
                    value: 'FINANCE',
                  },
                  {
                    key: 'Health',
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
));
