/* @flow */
import * as React from 'react';

export type CustomerFormProps = {
  keys: {
    customer_name: string,
    contact_name: string,
    contact_surname: string,
    abn: string,
    email: string,
  },
  labels: {
    customer_name: string,
    contact_name: string,
    contact_surname: string,
    abn: string,
    email: string,
  },
  values: Object, // coming from formik
  errors: Object, // coming from formik
  touched: Object, // coming from formik
  handleChange: Function, // coming from formik
  handleBlur: Function, // coming from formik
  /** classse **/
  classes: Object,
};
