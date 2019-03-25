import * as React from "react";
import { MainAccountFormProps } from "./types";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "components/hoc/withStyles";
import ErrorBoundary from "components/hoc/ErrorBoundary";
import TextField from "components/bosons/TextField";
import styles from "./styles";
import Dropdown from "../../bosons/Dropdown";
import { MAIN_ACCOUNT_TYPES } from "./mainAccountTypes";
type State = {};

class MainAccountForm extends React.Component<MainAccountFormProps, State> {
  static propTypes = {
    keys: PropTypes.shape({
      mainAccount_name: PropTypes.string,
      mainAccount_type: PropTypes.string,
      mainAccount_code: PropTypes.string
    }),
    labels: PropTypes.shape({
      mainAccount_name: PropTypes.string,
      mainAccount_type: PropTypes.string,
      mainAccount_code: PropTypes.string
    }),
    values: PropTypes.object, // coming from formik
    errors: PropTypes.object, // coming from formik
    touched: PropTypes.object, // coming from formik
    handleChange: PropTypes.func, // coming from formik
    handleBlur: PropTypes.func, // coming from formik
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func,
    classes: PropTypes.any // will come from withStyles HOC
  };

  static defaultProps = {
    keys: {
      mainAccount_name: "mainAccount_name",
      mainAccount_type: "mainAccount_type",
      mainAccount_code: "mainAccount_code"
    },
    labels: {
      mainAccount_name: "Main Account Name",
      mainAccount_type: "Main Account Type",
      mainAccount_code: "Main Account Code"
    }
  };

  render() {
    const {
      classes,
      keys,
      labels,
      values,
      handleChange,
      handleBlur,
      errors,
      touched,
      setFieldValue,
      setFieldTouched
    } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <TextField
                label={labels.mainAccount_name}
                placeholder={"E.g: Revenue"}
                name={keys.mainAccount_name}
                id={keys.mainAccount_name}
                value={values[keys.mainAccount_name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[keys.mainAccount_name] && errors[keys.mainAccount_name]
                }
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12}>
              <Dropdown
                label={labels.mainAccount_type}
                placeholder={"Select Type"}
                name={keys.mainAccount_type}
                id={keys.mainAccount_type}
                items={MAIN_ACCOUNT_TYPES}
                value={values[keys.mainAccount_type]}
                onChange={e => setFieldValue(keys.mainAccount_type, e.value)}
                onClose={() => setFieldTouched(keys.mainAccount_type)}
                error={touched[keys.mainAccount_type] && errors[keys.mainAccount_type]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={labels.mainAccount_code}
                placeholder={"E.g: 1001"}
                name={keys.mainAccount_code}
                id={keys.mainAccount_code}
                value={values[keys.mainAccount_code]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[keys.mainAccount_code] && errors[keys.mainAccount_code]
                }
                showClearIcon={false}
              />
            </Grid>
          </Grid>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(MainAccountForm);
