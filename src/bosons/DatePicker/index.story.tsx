import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik } from 'formik';
import FormikDatePicker from './FormikDatePicker';
import DatePicker from './index';

storiesOf('DatePicker', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <div style={{ padding: 10 }}>
        <div style={{ width: 500 }}>
          <h4>default</h4>
          <DatePicker />
          <h4>custom button color</h4>
          <DatePicker buttonColor="#2bc88f" />
          <h4>With Label</h4>
          <DatePicker label="Due Date" />
          <h4>Date Format</h4>
          <DatePicker label="Due Date" dateFormat="MMM YYYY" />
        </div>
      </div>
    ))
  )
  .add(
    'Formik',
    withInfo('Formik DatePicker')(() => (
      <div style={{ padding: 10 }}>
        <div style={{ width: 500 }}>
          <Formik
            initialValues={{ date1: '', date2: new Date() }}
            onSubmit={() => {}}
          >
            <React.Fragment>
              <FormikDatePicker name="date1" />
              <br />
              <FormikDatePicker name="date2" label="with Selected Date" />
            </React.Fragment>
          </Formik>
        </div>
      </div>
    ))
  );
