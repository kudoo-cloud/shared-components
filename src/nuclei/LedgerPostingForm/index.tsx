import * as React from "react";
import { LedgerPostingFormProps } from "./types";
// import cx from 'classnames';
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "components/hoc/withStyles";
import ErrorBoundary from "components/hoc/ErrorBoundary";
import styles from "./styles";
import Dropdown from '../../bosons/Dropdown';
import { POSTING_TYPES } from './postingTypes';
import { MAIN_ACCOUNT_TYPES } from "shared/src/nuclei/MainAccountForm/mainAccountTypes";
type State = {};

class LedgerPostingForm extends React.Component<LedgerPostingFormProps, State> {
  static propTypes = {
    keys: PropTypes.shape({
      postingType: PropTypes.string,
      mainAccount_id: PropTypes.string,
      mainAccount_type: PropTypes.string,
    }),
    labels: PropTypes.shape({
      postingType: PropTypes.string,
      mainAccount_id: PropTypes.string,
      mainAccount_type: PropTypes.string,
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
      postingType: "postingType",
      mainAccount_id: "mainAccount_id",
      mainAccount_type: "mainAccount_type",
    },
    labels: {
      postingType: "Posting Type",
      mainAccount_id: "Main Account",
      mainAccount_type: "Main Account Type",
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
              <Dropdown
                label={labels.postingType}
                placeholder={"Select Type"}
                name={keys.postingType}
                id={keys.postingType}
                items={POSTING_TYPES}
                value={values[keys.postingType]}
                onChange={e => setFieldValue(keys.postingType, e.value)}
                onClose={() => setFieldTouched(keys.postingType)}
                error={touched[keys.postingType] && errors[keys.postingType]}
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
          </Grid>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(LedgerPostingForm);
