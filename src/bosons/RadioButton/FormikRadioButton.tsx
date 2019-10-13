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
            setFieldValue(field.name, checked);
            setFieldTouched(field.name);
          }}
        />
      )}
    </Field>
  );
};

export default FormikRadioButton;
