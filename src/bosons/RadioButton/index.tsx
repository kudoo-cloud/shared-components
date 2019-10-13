import * as React from 'react';
import { RadioButtonProps } from './types';
import classNames from 'classnames';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

type State = {
  value: boolean;
};

class RadioButton extends React.Component<RadioButtonProps, State> {
  static defaultProps = {
    label: '',
    id: '',
    onChange: () => {},
    disabled: false,
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

  changeValue = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  _select = () => {
    this.setState({ value: true });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  };

  _renderRadio = () => {
    const { classes, label, disabled } = this.props;
    return (
      <div
        className={classNames(classes.radioWrapper, { disabled })}
        onClick={this._select}
      >
        <div
          className={classNames(classes.radioOuterCircle, {
            selected: this.state.value,
          })}
        >
          <div className={classes.radioInnerCircle} />
        </div>
        {Boolean(label) && <div className={classes.radioLabel}>{label}</div>}
      </div>
    );
  };

  render() {
    let { classes, id } = this.props;
    let componentClass = classNames(classes.radioComponent);
    return (
      <ErrorBoundary>
        <div className={componentClass} id={id}>
          {this._renderRadio()}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<RadioButtonProps>(styles)(RadioButton);
