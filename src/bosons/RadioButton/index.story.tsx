import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik } from 'formik';
import RadioButton from './index';
import FormikRadioButton from './FormikRadioButton';

storiesOf('RadioButton', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <div style={{ margin: 10 }}>
        <h4>Default</h4>
        <RadioButton label="Text" />
        <h4>Disabled</h4>
        <RadioButton disabled label="Text" />
        <h4>Predefined checked</h4>
        <RadioButton value={true} label="Text" />
        <h4>Custom color</h4>
        <RadioButton value={true} color="green" label="Text" />
      </div>
    ))
  )
  .add(
    'Formik',
    withInfo('Formik RadioButton')(() => (
      <div style={{ margin: 10 }}>
        <Formik
          initialValues={{ radio1: true, radio2: false }}
          onSubmit={() => {}}
        >
          <React.Fragment>
            <FormikRadioButton name="radio1" label="Radio 1" />
            <br />
            <FormikRadioButton name="radio2" label="Radio 2" />
          </React.Fragment>
        </Formik>
      </div>
    ))
  );
