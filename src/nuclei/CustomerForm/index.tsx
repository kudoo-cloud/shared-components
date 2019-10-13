import * as React from 'react';
import { CustomerFormProps } from './types';
import Grid from '@material-ui/core/Grid';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import FormikTextField from 'components/bosons/TextField/FormikTextField';
import styles from './styles';

class CustomerForm extends React.Component<CustomerFormProps> {
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
    const { classes, keys, labels } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <FormikTextField
                label={labels.customer_name}
                placeholder={'E.g: Google'}
                name={keys.customer_name}
                id={keys.customer_name}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.contact_name}
                placeholder={'E.g: John'}
                name={keys.contact_name}
                id={keys.contact_name}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.contact_surname}
                placeholder={'E.g: Doe'}
                name={keys.contact_surname}
                id={keys.contact_surname}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.abn}
                placeholder={'E.g: 123456789'}
                name={keys.abn}
                id={keys.abn}
                showClearIcon={false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormikTextField
                label={labels.email}
                placeholder={'E.g: abc@google.com'}
                name={keys.email}
                id={keys.email}
                showClearIcon={false}
              />
            </Grid>
          </Grid>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<CustomerFormProps>(styles)(CustomerForm);
