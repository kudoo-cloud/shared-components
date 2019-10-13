import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';
import FormikToggleButton from './FormikToggleButton';
import ToggleButton from './index';

storiesOf('ToggleButton', module)
  .add(
    'Default',
    withInfo('Default')(() => (
      <div style={{ margin: 10 }}>
        <h4>Default</h4>
        <ToggleButton
          labels={['Sign In', 'Login']}
          selectedIndex={0}
          onChange={action('on-change')}
        />
        <h4>Custom Width</h4>
        <div style={{ width: 400 }}>
          <ToggleButton
            labels={['Sign In', 'Login']}
            selectedIndex={0}
            onChange={action('on-change')}
          />
        </div>
        <h4>More than 2</h4>
        <ToggleButton
          labels={['First', 'Second', 'Third', 'Forth']}
          onChange={action('on-change')}
          selectedIndex={1}
        />
        <h4>Custom Color</h4>
        <ToggleButton
          labels={['First', 'Second', 'Third']}
          selectedIndex={1}
          activeColor="#2CCFA0"
          onChange={action('on-change')}
        />
        <h4>With Label</h4>
        <ToggleButton
          labels={['First', 'Second', 'Third']}
          selectedIndex={1}
          title="Choose"
          onChange={action('on-change')}
        />
        <h4>onChange</h4>
        <ToggleButton
          labels={['First', 'Second', 'Third']}
          selectedIndex={0}
          activeColor="#2CCFA0"
          onChange={action('on-change')}
        />
      </div>
    ))
  )
  .add(
    'Formik',
    withInfo('Formik ToggleButton')(() => (
      <div style={{ margin: 10 }}>
        <Formik initialValues={{ toggle1: 0, toggle2: 1 }} onSubmit={() => {}}>
          <React.Fragment>
            <FormikToggleButton name="toggle1" labels={['Sign In', 'Login']} />
            <br />
            <FormikToggleButton
              name="toggle2"
              labels={['Toggle 1', 'Toggle 2']}
            />
          </React.Fragment>
        </Formik>
      </div>
    ))
  );
