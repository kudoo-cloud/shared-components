import * as React from 'react';
import { PhoneNumberFieldProps } from './types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import FormikTextField from 'components/bosons/TextField/FormikTextField';
import styles from './styles';

class PhoneNumberField extends React.Component<PhoneNumberFieldProps> {
  static defaultProps = {
    areaCodeFieldName: 'areaCode',
    phoneNumberFieldName: 'phoneNumber',
  };

  render() {
    const {
      classes,
      areaCodeLabel,
      areaCodePlaceholder,
      phoneNumberPlaceholder,
      phoneNumberLabel,
      areaCodeFieldName,
      phoneNumberFieldName,
      ...rest
    } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <div className={classes.areaCode}>
            <FormikTextField
              label={areaCodeLabel}
              icon={<div className={classes.plusIcon}>+</div>}
              placeholder={areaCodePlaceholder || ''}
              showClearIcon={false}
              showErrorMessage={false}
              name={areaCodeFieldName}
            />
          </div>
          <div className={classes.phoneNumber}>
            <FormikTextField
              {...rest}
              label={phoneNumberLabel}
              placeholder={phoneNumberPlaceholder || ''}
              name={phoneNumberFieldName}
            />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<PhoneNumberFieldProps>(styles)(PhoneNumberField);
