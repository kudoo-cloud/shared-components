import * as React from 'react';
import { Field } from 'formik';
import { CheckBoxProps } from './types';
import Checkbox from './index';

const FormikCheckbox = (props: CheckBoxProps) => {
  return (
    <Field name={props.name}>
      {({
        field,
        form: { touched, errors, setFieldValue, setFieldTouched },
      }) => {
        console.log(field);

        return (
          <Checkbox
            {...props}
            {...field}
            error={touched[field.name] && errors[field.name]}
            onChange={(checked) => {
              setFieldValue(name, checked);
              setFieldTouched(name);
            }}
          />
        );
      }}
    </Field>
  );
};

export default FormikCheckbox;
