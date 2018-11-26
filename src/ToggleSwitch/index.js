/* @flow */
import * as React from 'react';
import type { ToggleSwitchProps } from './types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {
  value: boolean,
};

class ToggleSwitch extends React.Component<ToggleSwitchProps, State> {
  static propTypes = {
    offLabel: PropTypes.string,
    offColor: PropTypes.string,
    onLabel: PropTypes.string,
    onColor: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    label: PropTypes.string,
    compact: PropTypes.bool,
    classes: PropTypes.object, // will come from withStyles HOC
  };

  static defaultProps = {
    offLabel: 'OFF',
    onLabel: 'ON',
    onChange: () => {},
    value: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (props.value !== prevProps.value) {
      this.setState({
        value: props.value,
      });
    }
  }

  changeValue = value => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  _handleChange = (event, checked) => {
    this.setState({ value: checked });
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  };

  _renderLabel() {
    const { classes, label } = this.props;
    return <div className={classes.label}>{label}</div>;
  }

  _renderSwitch = () => {
    const { classes, offLabel, onLabel } = this.props;
    return (
      <div
        className={classes.toggleSwitchWrapper}
        data-test={`toggle-switch${this.state.value ? '-checked' : ''}`}>
        <Switch
          checked={this.state.value}
          classes={{
            root: classes.root,
            icon: classes.icon,
            bar: classes.bar,
            checked: classes.checked,
          }}
          disabled={this.props.disabled}
          onChange={this._handleChange}
        />
        {!this.state.value && (
          <div className={classes.offLabel}>{offLabel}</div>
        )}
        {this.state.value && <div className={classes.onLabel}>{onLabel}</div>}
      </div>
    );
  };

  render() {
    let { classes, label } = this.props;
    let componentClass = classNames(classes.switchComponent);
    return (
      <ErrorBoundary>
        <div className={componentClass}>
          {Boolean(label) && this._renderLabel()}
          {this._renderSwitch()}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(ToggleSwitch);
