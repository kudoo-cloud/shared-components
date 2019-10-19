import * as React from 'react';
import { AddressFormProps } from './types';
import Grid from '@material-ui/core/Grid';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import FormikTextField from 'components/bosons/TextField/FormikTextField';
import styles from './styles';

class AddressForm extends React.Component<AddressFormProps> {
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
    const { classes, keys, labels } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <FormikTextField
                label={labels.street}
                placeholder={'E.g: 80 Baker Street'}
                name={keys.street}
                id={keys.street}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.city}
                placeholder={'E.g: PORT ALBANY'}
                name={keys.city}
                id={keys.city}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.state}
                placeholder={'E.g: Western Australia'}
                name={keys.state}
                id={keys.state}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.country}
                placeholder={'E.g: Australia'}
                name={keys.country}
                id={keys.country}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.postcode}
                placeholder={'E.g: 6330'}
                name={keys.postcode}
                id={keys.postcode}
                showClearIcon={false}
              />
            </Grid>
          </Grid>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<AddressFormProps>(styles)(AddressForm);
