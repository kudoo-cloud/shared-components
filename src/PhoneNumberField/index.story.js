import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import PhoneNumberField from './index';

storiesOf('PhoneNumberField', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <h4>Default</h4>
      <PhoneNumberField
        areaCodeLabel="Area Code"
        areaCodeValue={'91'}
        phoneNumberLabel={'Mobile Number'}
        phoneNumberValue={'12121212'}
        showClearIcon={false}
        onChangeText={action('on-change')}
      />
    </div>
  ))
);
