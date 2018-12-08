/* @flow */
import * as React from 'react';
import type { AddressFormProps } from './types';
// import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TextField from 'components/bosons/TextField';
import styles from './styles';

type State = {};

class AddressForm extends React.Component<AddressFormProps, State> {
  static propTypes = {
    keys: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      postcode: PropTypes.string,
    }),
    labels: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      postcode: PropTypes.string,
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
      street: 'street',
      city: 'city',
      state: 'state',
      country: 'country',
      postcode: 'postcode',
    },
    labels: {
      street: 'Street Address',
      city: 'City',
      state: 'State/Province',
      country: 'Country',
      postcode: 'Postcode',
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
                label={labels.street}
                placeholder={'E.g: 80 Baker Street'}
                name={keys.street}
                id={keys.street}
                value={get(values, keys.street)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={get(touched, keys.street) && get(errors, keys.street)}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.city}
                placeholder={'E.g: PORT ALBANY'}
                name={keys.city}
                id={keys.city}
                value={get(values, keys.city)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={get(touched, keys.city) && get(errors, keys.city)}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.state}
                placeholder={'E.g: Western Australia'}
                name={keys.state}
                id={keys.state}
                value={get(values, keys.state)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={get(touched, keys.state) && get(errors, keys.state)}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.country}
                placeholder={'E.g: Australia'}
                name={keys.country}
                id={keys.country}
                value={get(values, keys.country)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={get(touched, keys.country) && get(errors, keys.country)}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={labels.postcode}
                placeholder={'E.g: 6330'}
                name={keys.postcode}
                id={keys.postcode}
                value={get(values, keys.postcode)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  get(touched, keys.postcode) && get(errors, keys.postcode)
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

export default withStyles(styles)(AddressForm);
