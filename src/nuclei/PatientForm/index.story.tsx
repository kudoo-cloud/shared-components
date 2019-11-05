import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import PatientForm from './index';
import { Formik } from 'formik';

storiesOf('PatientForm', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <div style={{ margin: 10, width: 600 }}>
        <Formik initialValues={{}} onSubmit={action('onSubmit')}>
          {(formProps) => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <PatientForm />
              </form>
            );
          }}
        </Formik>
      </div>
    ))
  )
  .add(
    'with AU Fields',
    withInfo('with Australian specific Fields')(() => (
      <div style={{ margin: 10, width: 600 }}>
        <Formik initialValues={{}} onSubmit={action('onSubmit')}>
          {(formProps) => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <PatientForm showAUFields />
              </form>
            );
          }}
        </Formik>
      </div>
    ))
  );
