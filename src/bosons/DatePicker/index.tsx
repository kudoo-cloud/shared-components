import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import cx from 'classnames';
import moment from 'moment';
import { Portal } from 'react-portal';
import { Transition } from 'react-transition-group';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import withStyles from 'components/hoc/withStyles';
import TextField from 'components/bosons/TextField';
import FieldLabel from 'components/bosons/FieldLabel';
import PropTypes from 'prop-types';
import { DatePickerProps } from './types';
import styles from './styles';

type State = {
  isModalOpen: boolean;
  selectedDate: string | null | Date;
  internalDate: string | null | Date;
};

class DatePicker extends Component<DatePickerProps, State> {
  static propTypes = {
    name: PropTypes.string,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onDateChange: PropTypes.func,
    dateFormat: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    textFieldProps: PropTypes.object,
    calendarProps: PropTypes.object,
    classes: PropTypes.object, // will come from withStyles HOC
    theme: PropTypes.any,
    buttonColor: PropTypes.string,
  };

  static defaultProps = {
    onDateChange: () => {},
    dateFormat: 'YYYY-MM-DD',
    isDisabled: false,
    textFieldProps: {},
    calendarProps: {},
  };

  state = {
    isModalOpen: false,
    selectedDate: '',
    internalDate: new Date(),
    lastValue: null,
  };

  componentDidMount() {
    if (this.props.value) {
      this.setState({
        selectedDate: moment(this.props.value).format(),
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        selectedDate: this.props.value
          ? moment(this.props.value).format()
          : null,
      });
    }
  }

  closeModal = () => {
    const { selectedDate } = this.state;
    if (selectedDate) {
      // if date is already selected then on close, set internalDate date to selected date
      // so that even if user selected another date , we will reset it on Cancel Button/ Close Modal
      this.setState({ internalDate: selectedDate });
    } else {
      this.setState({ internalDate: null });
    }
    this.setState({ isModalOpen: false });
  };

  _selectDateAndClose = () => {
    const { internalDate } = this.state;
    if (internalDate) {
      this.setState({ selectedDate: internalDate });
    }
    this.setState({ isModalOpen: false });
    if (this.props.onDateChange) {
      const date = internalDate ? moment(internalDate).format() : null;
      this.props.onDateChange(date);
    }
  };

  _onReset = () => {
    this.setState({
      internalDate: null,
      selectedDate: null,
      isModalOpen: false,
    });
    this.props.onDateChange(null);
  };

  _renderTextInput() {
    const { classes, placeholder, dateFormat, textFieldProps } = this.props;
    const { selectedDate } = this.state;
    return (
      <div
        className={classes.inputWrapper}
        onClick={() => {
          this.setState({ isModalOpen: true });
        }}
      >
        <TextField
          {...textFieldProps}
          placeholder={placeholder || 'Select Date'}
          value={selectedDate ? moment(selectedDate).format(dateFormat) : ''}
          showClearIcon={false}
          disabled
          classes={{
            textInputWrapper: classes.textInputWrapper,
            textInput: classes.textInput,
          }}
        />
        <div className={classes.calendarButton}>
          <i className={'fa fa-calendar'} />
        </div>
      </div>
    );
  }

  _renderCalendarModal() {
    const { classes, calendarProps } = this.props;
    const { isModalOpen, selectedDate, internalDate } = this.state;
    return (
      <Transition in={isModalOpen} timeout={0}>
        {(state) => {
          if (!isModalOpen) {
            return null;
          }
          return (
            <Portal>
              <div className={cx(classes.modalWrapper, state)}>
                <div className={cx(classes.calendarWrapper, state)}>
                  <InfiniteCalendar
                    width={400}
                    height={350}
                    selected={selectedDate || internalDate}
                    displayOptions={{
                      showOverlay: false,
                    }}
                    onSelect={(e) => {
                      this.setState({ internalDate: e });
                    }}
                    {...calendarProps}
                  />
                  {Boolean(internalDate) && (
                    <div className={classes.buttons}>
                      <div className={classes.button} onClick={this._onReset}>
                        Reset
                      </div>
                      <div className={classes.rightButtons}>
                        <div
                          className={classes.button}
                          onClick={this.closeModal}
                        >
                          Cancel
                        </div>
                        <div
                          className={classes.button}
                          onClick={this._selectDateAndClose}
                        >
                          Ok
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={cx(classes.overlayWrapper, state)}
                  onClick={this._selectDateAndClose}
                />
              </div>
            </Portal>
          );
        }}
      </Transition>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          {this.props.label && <FieldLabel label={this.props.label} />}
          {this._renderTextInput()}
          {this._renderCalendarModal()}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<DatePickerProps>(styles)(DatePicker);
