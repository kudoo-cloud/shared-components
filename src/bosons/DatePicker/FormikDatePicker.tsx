import * as React from 'react';
import { Field } from 'formik';
import { DatePickerProps } from './types';
import get from 'lodash/get';
import DatePicker from './index';

const FormikDatePicker = (props: DatePickerProps) => {
  return (
    <Field name={props.name}>
      {({
        field,
        form: { touched, errors, setFieldValue, setFieldTouched },
      }) => (
        <DatePicker
          {...props}
          {...field}
          textFieldProps={{
            ...(props.textFieldProps || {}),
            error: get(touched, field.name) && get(errors, field.name),
          }}
          onDateChange={(date) => {
            setFieldValue(field.name, date);
            setFieldTouched(field.name);
          }}
        />
      )}
    </Field>
  );
};

export default FormikDatePicker;
