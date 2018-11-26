/* @flow */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AlertDialog from './index';

storiesOf('AlertDialog', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <div style={{ margin: 10 }}>
        <AlertDialog
          visible
          title="Are you sure this project is complete?"
          description="When you mark a project as complete, by default we will send an invoice to your customer for the total or remainder amount owed to you for the services defined. Are you sure you want to mark this project as complete?"
        />
      </div>
    ))
  )
  .add(
    'With 2 Buttons',
    withInfo('With 2 Buttons')(() => (
      <div style={{ margin: 10 }}>
        <AlertDialog
          visible
          title="Are you sure this project is complete?"
          description="When you mark a project as complete, by default we will send an invoice to your customer for the total or remainder amount owed to you for the services defined. Are you sure you want to mark this project as complete?"
          buttons={[
            {
              label: 'Close',
              onClick: () => {},
            },
            {
              label: 'Mark as Complete',
              onClick: () => {
                alert('Clicked');
              },
              style: {
                backgroundColor: '#29a9db',
                color: 'white',
              },
            },
          ]}
        />
      </div>
    ))
  );
