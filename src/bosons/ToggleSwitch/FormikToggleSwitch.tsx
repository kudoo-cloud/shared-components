import * as React from 'react';
import { Field } from 'formik';
import { ToggleSwitchProps } from './types';
import ToggleSwitch from './index';

const FormikToggleSwitch = (props: ToggleSwitchProps) => {
  return (
    <Field name={props.name}>
      {({ field, form: { setFieldValue, setFieldTouched } }) => (
        <ToggleSwitch
          {...props}
          {...field}
          onChange={(checked) => {
            setFieldValue(name, checked);
            setFieldTouched(name);
          }}
        />
      )}
    </Field>
  );
};

export default FormikToggleSwitch;
