import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ToggleSwitch from './index';
import { Formik } from 'formik';
import FormikToggleSwitch from './FormikToggleSwitch';

storiesOf('ToggleSwitch', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <div style={{ margin: 10 }}>
        <h4>Default</h4>
        <ToggleSwitch />
        <h4>Compact</h4>
        <ToggleSwitch compact />
        <h4>With Label</h4>
        <ToggleSwitch label={'Two step account authentication'} />
        <h4>Disabled</h4>
        <ToggleSwitch disabled />
        <h4>Predefined value</h4>
        <ToggleSwitch value={true} />
        <h4>Custom label</h4>
        <ToggleSwitch value={true} onLabel="Yes" offLabel="No" />
        <h4>Custom color</h4>
        <ToggleSwitch
          value={true}
          onLabel="Yes"
          offLabel="No"
          offColor="red"
          onColor="green"
        />
      </div>
    ))
  )
  .add(
    'Formik',
    withInfo('Formik Toggle Switch')(() => (
      <div style={{ margin: 10 }}>
        <Formik
          initialValues={{ switch1: true, switch2: false }}
          onSubmit={() => {}}
        >
          <React.Fragment>
            <FormikToggleSwitch name="switch1" />
            <FormikToggleSwitch name="switch2" />
          </React.Fragment>
        </Formik>
      </div>
    ))
  );
