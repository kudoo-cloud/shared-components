import * as React from "react";
import { LedgerPostingFormProps } from "./types";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "components/hoc/withStyles";
import ErrorBoundary from "components/hoc/ErrorBoundary";
import styles from "./styles";
import Dropdown from "../../bosons/Dropdown";
import { POSTING_TYPES } from "./postingTypes";
type State = {};

class LedgerPostingForm extends React.Component<LedgerPostingFormProps, State> {
  static propTypes = {
    keys: PropTypes.shape({
      postingType: PropTypes.string,
      mainAccount_id: PropTypes.string,
    }),
    labels: PropTypes.shape({
      postingType: PropTypes.string,
      mainAccount_id: PropTypes.string,
    }),
    mainAccounts: PropTypes.array,
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
    },
    labels: {
      postingType: "Posting Type",
      mainAccount_id: "Main Account",
    }
  };

  render() {
    const {
      classes,
      keys,
      labels,
      values,
      errors,
      touched,
      setFieldValue,
      setFieldTouched,
      mainAccounts
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
                label={labels.mainAccount_id}
                placeholder={"Select Type"}
                name={keys.mainAccount_id}
                id={keys.mainAccount_id}
                items={mainAccounts.length ? mainAccounts : [{ value: '', label: 'No account found for this company. Please create Main Account first' }]}
                value={values[keys.mainAccount_id]}
                onChange={e => setFieldValue(keys.mainAccount_id, e.value)}
                onClose={() => setFieldTouched(keys.mainAccount_id)}
                error={touched[keys.mainAccount_id] && errors[keys.mainAccount_id]}
              />
            </Grid>
          </Grid>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(LedgerPostingForm);
