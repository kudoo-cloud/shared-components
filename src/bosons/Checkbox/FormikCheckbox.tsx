import * as React from 'react';
import { Field } from 'formik';
import { CheckBoxProps } from './types';
import get from 'lodash/get';
import Checkbox from './index';

const FormikCheckbox = (props: CheckBoxProps) => {
  return (
    <Field name={props.name}>
      {({
        field,
        form: { touched, errors, setFieldValue, setFieldTouched },
      }) => (
        <Checkbox
          {...props}
          {...field}
          error={get(touched, field.name) && get(errors, field.name)}
          onChange={(checked) => {
            setFieldValue(name, checked);
            setFieldTouched(name);
          }}
        />
      )}
    </Field>
  );
};

export default FormikCheckbox;
