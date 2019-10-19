import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik } from 'formik';
import PhoneNumberField from './index';

storiesOf('PhoneNumberField', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <h4>Default</h4>
      <Formik
        initialValues={{ areaCode: '91', phoneNumber: '' }}
        onSubmit={() => {}}
      >
        <PhoneNumberField
          areaCodeFieldName="areaCode"
          phoneNumberFieldName="phoneNumber"
          areaCodeLabel="Area Code"
          phoneNumberLabel={'Mobile Number'}
          showClearIcon={false}
        />
      </Formik>
    </div>
  ))
);
