import * as React from 'react';
import { Field } from 'formik';
import { TextFieldProps } from './types';
import TextInput from './index';

const FormikTextField = (props: TextFieldProps) => {
  return (
    <Field name={props.name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      }) => (
        <TextInput
          {...props}
          {...field}
          error={touched[field.name] && errors[field.name]}
        />
      )}
    </Field>
  );
};

export default FormikTextField;
