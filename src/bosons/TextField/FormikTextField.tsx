import * as React from 'react';
import { Field } from 'formik';
import { TextFieldProps } from './types';
import TextInput from './index';
import get from 'lodash/get';

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
          error={get(touched, field.name) && get(errors, field.name)}
        />
      )}
    </Field>
  );
};

export default FormikTextField;
