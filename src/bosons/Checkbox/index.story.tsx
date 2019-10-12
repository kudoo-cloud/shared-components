import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik } from 'formik';
import CheckBox from './index';
import FormikCheckbox from './FormikCheckbox';

storiesOf('CheckBox', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <div style={{ margin: 10 }}>
        <h4>Default</h4>
        <CheckBox label="Text" />
        <h4>Disabled</h4>
        <CheckBox disabled label="Text" />
        <h4>Predefined checked</h4>
        <CheckBox value={true} label="Text" />
        <h4>Custom color</h4>
        <CheckBox value={true} color="green" label="Text" />
        <h4>With Error</h4>
        <CheckBox value={true} label="Text" error="Error Message" />
      </div>
    ))
  )
  .add(
    'Formik',
    withInfo('Formik Checkbox')(() => (
      <div style={{ margin: 10 }}>
        <Formik
          initialValues={{ checkbox1: true, checkbox2: false }}
          onSubmit={() => {}}
        >
          <React.Fragment>
            <FormikCheckbox name="checkbox1" label="Checkbox 1" />
            <br />
            <FormikCheckbox name="checkbox2" label="Checkbox 2" />
          </React.Fragment>
        </Formik>
      </div>
    ))
  );
