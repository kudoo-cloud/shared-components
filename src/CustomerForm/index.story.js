import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import CustomerForm from './index';
import { Formik } from 'formik';
import Yup from 'yup';

storiesOf('CustomerForm', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10, width: 600 }}>
      <Formik
        initialValues={{
          company_name: '',
          contact_name: '',
          contact_surname: '',
          abn: '',
          email: '',
        }}
        onSubmit={action('onSubmit')}
        render={formProps => (
          <form onSubmit={formProps.handleSubmit}>
            <CustomerForm
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
