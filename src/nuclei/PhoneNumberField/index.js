/* @flow */
import * as React from 'react';
import type { PhoneNumberFieldProps } from './types';
// import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TextField from 'components/bosons/TextField';
import styles from './styles';

type State = {
  areaCodeValue: string,
  phoneNumberValue: string,
};

class PhoneNumberField extends React.Component<PhoneNumberFieldProps, State> {
  static propTypes = {
    ...TextField.propTypes,
    showAreaCode: PropTypes.bool,
    areaCodeLabel: PropTypes.string,
    areaCodeValue: PropTypes.string,
    areaCodePlaceholder: PropTypes.string,
    phoneNumberLabel: PropTypes.string,
    phoneNumberValue: PropTypes.string,
    phoneNumberPlaceholder: PropTypes.string,
  };

  static defaultProps = {
    onChangeText: () => {},
    showAreaCode: true,
    id: 'phone-number-field',
  };

  constructor(props) {
    super(props);
    this.state = {
      areaCodeValue: props.areaCodeValue || '',
      phoneNumberValue: props.phoneNumberValue || '',
    };
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (props.areaCodeValue !== prevProps.areaCodeValue) {
      this.setState({
        areaCodeValue: props.areaCodeValue,
      });
    }
    if (props.phoneNumberValue !== prevProps.phoneNumberValue) {
      this.setState({
        phoneNumberValue: props.phoneNumberValue,
      });
    }
  }

  _onAreaCodeChange = (text: string) => {
    this.setState({ areaCodeValue: text });
    if (this.props.onChangeText) {
      this.props.onChangeText({
        areaCode: text,
        phoneNumber: this.state.phoneNumberValue,
      });
    }
  };

  _onPhoneNumberChange = (text: string) => {
    this.setState({ phoneNumberValue: text });
    if (this.props.onChangeText) {
      this.props.onChangeText({
        phoneNumber: text,
        areaCode: this.state.areaCodeValue,
      });
    }
  };

  render() {
    const {
      classes,
      areaCodeValue, // eslint-disable-line
      phoneNumberValue, // eslint-disable-line
      areaCodeLabel,
      areaCodePlaceholder,
      phoneNumberPlaceholder,
      phoneNumberLabel,
      id,
      ...rest
    } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <div className={classes.areaCode}>
            <TextField
              label={areaCodeLabel}
              icon={<div className={classes.plusIcon}>+</div>}
              placeholder={areaCodePlaceholder || ''}
              showClearIcon={false}
              onChangeText={this._onAreaCodeChange}
              value={this.state.areaCodeValue}
              error={rest.error}
              showErrorMessage={false}
              id={id + '-code'}
            />
          </div>
          <div className={classes.phoneNumber}>
            <TextField
              {...rest}
              id={id + '-number'}
              label={phoneNumberLabel}
              placeholder={phoneNumberPlaceholder || ''}
              value={this.state.phoneNumberValue}
              onChangeText={this._onPhoneNumberChange}
            />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(PhoneNumberField);
