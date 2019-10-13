import * as React from 'react';
import { Field } from 'formik';
import { DropdownProps } from './types';
import get from 'lodash/get';
import Dropdown from './index';

const FormikDropdown = (props: DropdownProps) => {
  return (
    <Field name={props.name}>
      {({
        field,
        form: { touched, errors, setFieldValue, setFieldTouched },
      }) => (
        <Dropdown
          {...props}
          {...field}
          error={get(touched, field.name) && get(errors, field.name)}
          onChange={(item) => {
            if (!props.multiple) {
              // if multiple is not true , then only call setFieldValue or else onChangeMultiple will be called
              setFieldValue(field.name, item.value);
            }
          }}
          onChangeMultiple={(items) => {
            setFieldValue(field.name, items.map((item) => item.value));
          }}
          onClose={() => {
            setFieldTouched(field.name);
          }}
        />
      )}
    </Field>
  );
};

export default FormikDropdown;
