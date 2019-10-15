import * as React from 'react';
import { PatientFormProps, DVACardTypes, AboriginalStatus } from './types';
import Grid from '@material-ui/core/Grid';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import FormikTextField from 'components/bosons/TextField/FormikTextField';
import FormikDropdown from 'components/bosons/Dropdown/FormikDropdown';
import FormikDatePicker from 'components/bosons/DatePicker/FormikDatePicker';
import AddressForm from 'components/nuclei/AddressForm';
import FieldLabel from 'components/bosons/FieldLabel';
import Checkbox from 'components/bosons/Checkbox';
import FormikCheckbox from 'components/bosons/Checkbox/FormikCheckbox';
import styles from './styles';

const PatientForm: React.FC<PatientFormProps> = (props) => {
  const { classes, keys, labels, showAUFields } = props;
  const [sameAddress, setSameAddress] = React.useState(false);

  const renderAusFields = () => {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <FormikDropdown
            name={keys.dvaCardType}
            label={labels.dvaCardType}
            items={DVACardTypes}
          />
        </Grid>
        <Grid item xs={12}>
          <FormikDropdown
            name={keys.aboriginalStatus}
            label={labels.aboriginalStatus}
            items={AboriginalStatus}
          />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField
            name={keys.pensionerConcession}
            label={labels.pensionerConcession}
          />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField
            name={keys.commonwealthSeniors}
            label={labels.commonwealthSeniors}
          />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField
            name={keys.healthcareConcessions}
            label={labels.healthcareConcessions}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikTextField
            name={keys.safetyNetConcession}
            label={labels.safetyNetConcession}
            isNumber
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikTextField
            name={keys.noOfBirths}
            label={labels.noOfBirths}
            isNumber
          />
        </Grid>
        <Grid item xs={12}>
          <FormikCheckbox name={keys.oneName} label={labels.oneName} />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField
            name={keys.medicareNumber}
            label={labels.medicareNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <FormikTextField name={keys.DVA} label={labels.DVA} />
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <ErrorBoundary>
      <div className={classes.component}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <FormikTextField
              label={labels.title}
              name={keys.title}
              id={keys.title}
              showClearIcon={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField
              label={labels.firstName}
              placeholder={'E.g: John'}
              name={keys.firstName}
              id={keys.firstName}
              showClearIcon={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField
              label={labels.lastName}
              placeholder={'E.g: Doe'}
              name={keys.lastName}
              id={keys.lastName}
              showClearIcon={false}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikDropdown
              label={labels.gender}
              name={keys.gender}
              id={keys.gender}
              items={[
                {
                  label: 'Male',
                  value: 'Male',
                },
                {
                  label: 'Female',
                  value: 'Female',
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikDatePicker
              label={labels.dob}
              name={keys.dob}
              calendarProps={{ maxDate: new Date() }}
            />
          </Grid>
          <Grid item xs={12}>
            <FieldLabel
              label="Birth Address"
              classes={{ label: classes.addressLabel }}
            />
            <AddressForm keys={keys.birthAddress} />
          </Grid>
          <Grid item xs={12}>
            <FieldLabel
              label="Current Address"
              classes={{ label: classes.addressLabel }}
              extraLinkWithLabel={
                <Checkbox
                  label="Same as above"
                  onChange={(checked) => setSameAddress(checked)}
                  value={sameAddress}
                />
              }
            />
            {!sameAddress && <AddressForm keys={keys.address} />}
          </Grid>
          {showAUFields && renderAusFields()}
        </Grid>
      </div>
    </ErrorBoundary>
  );
};

PatientForm.defaultProps = {
  keys: {
    title: 'title',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    dob: 'dob',
    birthAddress: {
      street: 'birthAddress.street',
      city: 'birthAddress.city',
      state: 'birthAddress.state',
      country: 'birthAddress.country',
      postcode: 'birthAddress.postcode',
    },
    address: {
      street: 'address.street',
      city: 'address.city',
      state: 'address.state',
      country: 'address.country',
      postcode: 'address.postcode',
    },
    dvaCardType: 'dvaCardType',
    aboriginalStatus: 'aboriginalStatus',
    pensionerConcession: 'pensionerConcession',
    commonwealthSeniors: 'commonwealthSeniors',
    healthcareConcessions: 'healthcareConcessions',
    safetyNetConcession: 'safetyNetConcession',
    medicareNumber: 'medicareNumber',
    DVA: 'DVA',
    oneName: 'oneName',
    noOfBirths: 'noOfBirths',
  },
  labels: {
    title: 'Title',
    firstName: 'First Name',
    lastName: 'Last Name',
    gender: 'Gender',
    dob: 'Birth Date',
    dvaCardType: 'DVA Card Type',
    aboriginalStatus: 'Aboriginal Status',
    pensionerConcession: 'Pensioner Concession',
    commonwealthSeniors: 'Commonwealth Seniors',
    healthcareConcessions: 'Healthcare Concessions',
    safetyNetConcession: 'SafetyNet Concession',
    medicareNumber: 'Medicare Number',
    DVA: 'DVA',
    oneName: 'One Name',
    noOfBirths: 'No. Of Births',
  },
  showAUFields: false,
};

export default withStyles<PatientFormProps>(styles)(PatientForm);
