import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import AddressForm from './index';
import { Formik } from 'formik';

storiesOf('AddressForm', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10, width: 600 }}>
      <Formik
        initialValues={{
          street: '',
          city: '',
          state: '',
          country: '',
          postcode: '12345',
        }}
        onSubmit={action('onSubmit')}
        render={(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            <AddressForm />
          </form>
        )}
      />
    </div>
  ))
);
