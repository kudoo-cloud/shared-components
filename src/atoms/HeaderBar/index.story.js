import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import HeaderBar from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

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
              />
            </div>

            <div style={{ marginTop: 100 }}>
              <h4>Custom Label</h4>
              <HeaderBar
                headerLabel={'Dashboard'}
                profile={{ firstName: 'John', lastName: 'Doe' }}
              />
            </div>
          </div>
        );
      }}
    />
  </Router>
));
