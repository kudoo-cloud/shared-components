import * as React from 'react';
import { Field } from 'formik';
import { ToggleButtonProps } from './types';
import ToggleButton from './index';

const FormikToggleButton = (props: ToggleButtonProps) => {
  return (
    <Field name={props.name}>
      {({ field, form: { setFieldValue, setFieldTouched } }) => (
        <ToggleButton
          {...props}
          {...field}
          selectedIndex={field.value}
          onChange={(checked) => {
            setFieldValue(name, checked);
            setFieldTouched(name);
          }}
        />
      )}
    </Field>
  );
};

export default FormikToggleButton;
