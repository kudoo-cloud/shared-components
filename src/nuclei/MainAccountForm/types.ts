export type MainAccountFormProps = {
  keys: {
    mainAccount_name: string,
    mainAccount_type: string,
    mainAccount_code: string,
  },
  labels: {
    mainAccount_name: string,
    mainAccount_type: string,
    mainAccount_code: string,
  },
  values: Object, // coming from formik
  errors: Object, // coming from formik
  touched: Object, // coming from formik
  handleChange: Function, // coming from formik
  handleBlur: Function, // coming from formik
  setFieldValue: Function,
  setFieldTouched: Function,
  /** classse **/
  classes: any,
};
