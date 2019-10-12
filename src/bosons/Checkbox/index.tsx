import * as React from 'react';
import { CheckBoxProps, CheckboxSize } from './types';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import { randomNumber } from 'components/helpers';
import styles from './styles';

type State = {
  value: boolean;
};

class CheckBox extends React.Component<CheckBoxProps, State> {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.node,
    color: PropTypes.string,
    error: PropTypes.string,
    size: PropTypes.any,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    classes: PropTypes.object,
    theme: PropTypes.any,
    id: PropTypes.string,
  };

  static defaultProps = {
    label: '',
    onChange: () => {},
    disabled: false,
    value: false,
    size: CheckboxSize.large,
    id: `checkbox-${randomNumber()}`,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  changeValue = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  _toggleValue = () => {
    const newValue = !this.state.value;
    this.setState({ value: newValue });
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  };

  _renderCheckbox = () => {
    const { classes, label, disabled, id } = this.props;
    return (
      <div
        id={id + '-checkbox'}
        className={cx(classes.wrapper, { disabled })}
        onClick={this._toggleValue}
      >
        <div
          className={cx(classes.checkbox, {
            checked: this.state.value,
          })}
        >
          {this.state.value && (
            <i className={cx('icon icon-tick', classes.tickIcon)} />
          )}
        </div>
        {Boolean(label) && <div className={cx(classes.label)}>{label}</div>}
      </div>
    );
  };

  render() {
    const { classes, error, id } = this.props;
    return (
      <ErrorBoundary>
        <div className={cx(classes.component)} id={id}>
          {this._renderCheckbox()}
          {Boolean(error) && (
            <div id={id + '-error'} className={cx(classes.error)}>
              {error}
            </div>
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<CheckBoxProps>(styles)(CheckBox);
