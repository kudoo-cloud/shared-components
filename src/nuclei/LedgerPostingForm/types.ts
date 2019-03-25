export type LedgerPostingFormProps = {
  keys: {
    postingType: string,
    mainAccount_id: string,
  },
  labels: {
    postingType: string,
    mainAccount_id: string,
  },
  values: Object, // coming from formik
  errors: Object, // coming from formik
  touched: Object, // coming from formik
  handleChange: Function, // coming from formik
  handleBlur: Function, // coming from formik
  setFieldValue: Function,
  setFieldTouched: Function,
  mainAccounts: Array<Object>
  /** classse **/
  classes: any,
};
