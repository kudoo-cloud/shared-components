import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Modal from './index';

storiesOf('Modal', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <Modal
        visible
        title="Ready to submit for approval"
        description={
          <div>
            Your timesheet is now finalised. It will now be submitted for
            Approval.
          </div>
        }
        buttons={[
          {
            title: 'Cancel',
            type: 'cancel',
          },
          {
            title: 'Loading',
            loading: true,
          },
          {
            title: 'Submit',
          },
          {
            title: 'Disabled',
            isDisabled: true,
          },
        ]}
      />
    </div>
  ))
);
