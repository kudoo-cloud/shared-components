import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import CustomerForm from './index';
import { Formik } from 'formik';

storiesOf('CustomerForm', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10, width: 600 }}>
      <Formik
        initialValues={{
          dao_name: '',
          contact_name: '',
          contact_surname: '',
          abn: '',
          email: 'test@mail.com',
        }}
        onSubmit={action('onSubmit')}
        render={formProps => (
          <form onSubmit={formProps.handleSubmit}>
            <CustomerForm />
          </form>
        )}
      />
    </div>
  )),
);
