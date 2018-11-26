import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Tabs from './index';

storiesOf('Tabs', module).add(
  'Default',
  withInfo('Default')(() => (
    <div>
      <div style={{ margin: 10 }}>
        <Tabs
          activeIndex={0}
          tabs={[
            { label: 'General' },
            { label: 'User' },
            {
              label: 'Tab with function',
              onClick: () => {
                alert('Tab clicked!!!');
              },
            },
          ]}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Tabs
          activeIndex={0}
          tabs={[
            { label: 'Basic Details' },
            { label: 'Contact Details' },
            { label: 'Location Details' },
          ]}
          tabTheme="tertiary"
        />
      </div>
    </div>
  ))
);
