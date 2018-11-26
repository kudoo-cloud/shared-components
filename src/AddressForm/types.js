/* @flow */
import * as React from 'react';

export type AddressFormProps = {
  keys: {
    street: string,
    city: string,
    state: string,
    country: string,
    postcode: string,
  },
  labels: {
    street: string,
    city: string,
    state: string,
    country: string,
    postcode: string,
  },
  values: Object, // coming from formik
  errors: Object, // coming from formik
  touched: Object, // coming from formik
  handleChange: Function, // coming from formik
  handleBlur: Function, // coming from formik
  /** classse **/
  classes: Object,
};
