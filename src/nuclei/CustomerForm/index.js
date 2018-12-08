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
    }),
    values: PropTypes.object, // coming from formik
    errors: PropTypes.object, // coming from formik
    touched: PropTypes.object, // coming from formik
    handleChange: PropTypes.func, // coming from formik
    handleBlur: PropTypes.func, // coming from formik
    classes: PropTypes.object, // will come from withStyles HOC
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

export default withStyles(styles)(CustomerForm);
