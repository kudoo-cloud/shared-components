import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import AddressForm from './index';
import { Formik } from 'formik';
import Yup from 'yup';

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
          postcode: '',
        }}
        onSubmit={action('onSubmit')}
        render={formProps => (
          <form onSubmit={formProps.handleSubmit}>
            <AddressForm
              values={formProps.values}
              errors={formProps.errors}
              touched={formProps.touched}
              handleChange={formProps.handleChange}
              handleBlur={formProps.handleBlur}
            />
          </form>
        )}
      />
    </div>
  ))
);
