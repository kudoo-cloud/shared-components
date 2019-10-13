import * as React from 'react';
import { Field } from 'formik';
import { RadioButtonProps } from './types';
import RadioButton from './index';

const FormikRadioButton = (props: RadioButtonProps) => {
  return (
    <Field name={props.name}>
      {({ field, form: { setFieldValue, setFieldTouched } }) => (
        <RadioButton
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

export default FormikRadioButton;
