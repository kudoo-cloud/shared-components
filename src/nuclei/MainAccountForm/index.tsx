/* @flow */
import * as React from 'react';
import type { CustomerFormProps } from './types';
// import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TextField from 'components/bosons/TextField';
import styles from './styles';

type State = {};

class CustomerForm extends React.Component<CustomerFormProps, State> {
  static propTypes = {
    keys: PropTypes.shape({
      customer_name: PropTypes.string,
      contact_name: PropTypes.string,
      contact_surname: PropTypes.string,
      abn: PropTypes.string,
      email: PropTypes.string,
    }),
    labels: PropTypes.shape({
      customer_name: PropTypes.string,
      contact_name: PropTypes.string,
      contact_surname: PropTypes.string,
      abn: PropTypes.string,
      email: PropTypes.string,
import * as React from "react";
import { MainAccountFormProps } from "./types";
// import cx from 'classnames';
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "components/hoc/withStyles";
import ErrorBoundary from "components/hoc/ErrorBoundary";
import TextField from "components/bosons/TextField";
import styles from "./styles";
import Dropdown from '../../bosons/Dropdown';
import { MAIN_ACCOUNT_TYPES } from './mainAccountTypes';
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
    classes: PropTypes.object, // will come from withStyles HOC
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func,
    classes: PropTypes.any // will come from withStyles HOC
  };

  static defaultProps = {
    keys: {
      customer_name: 'customer_name',
      contact_name: 'contact_name',
      contact_surname: 'contact_surname',
      abn: 'abn',
      email: 'email',
    },
    labels: {
      customer_name: 'Customer Name',
      contact_name: 'Contact Name',
      contact_surname: 'Contact Surname',
      abn: 'ABN',
      email: 'Email',
    },
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
                label={labels.customer_name}
                placeholder={'E.g: Google'}
                name={keys.customer_name}
                id={keys.customer_name}
                value={values[keys.customer_name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[keys.customer_name] && errors[keys.customer_name]
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
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.contact_name}
                placeholder={'E.g: John'}
                name={keys.contact_name}
                id={keys.contact_name}
                value={values[keys.contact_name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[keys.contact_name] && errors[keys.contact_name]}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.contact_surname}
                placeholder={'E.g: Doe'}
                name={keys.contact_surname}
                id={keys.contact_surname}
                value={values[keys.contact_surname]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[keys.contact_surname] && errors[keys.contact_surname]
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
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.abn}
                placeholder={'E.g: 123456789'}
                name={keys.abn}
                id={keys.abn}
                value={(values[keys.abn] || '').replace(/ /g, '')}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[keys.abn] && errors[keys.abn]}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.email}
                placeholder={'E.g: abc@google.com'}
                name={keys.email}
                id={keys.email}
                value={values[keys.email]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[keys.email] && errors[keys.email]}
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
