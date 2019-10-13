import * as React from 'react';
import { ToggleButtonProps } from './types';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

type State = {
  selectedIndex: number;
};

class ToggleButton extends React.Component<ToggleButtonProps, State> {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeColor: PropTypes.string,
    onChange: PropTypes.func,
    selectedIndex: PropTypes.number,
    classes: PropTypes.object, // will come from withStyles HOC
    theme: PropTypes.any,
  };

  static defaultProps = {
    id: '',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex || 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedIndex !== prevProps.selectedIndex) {
      this.setState({ selectedIndex: this.props.selectedIndex });
    }
  }

  _handleChange = (index: number) => {
    if (index === this.state.selectedIndex) {
      return;
    }
    const { labels } = this.props;
    this.setState({ selectedIndex: index });
    if (this.props.onChange) {
      this.props.onChange(labels[index], index);
    }
  };

  _renderButtons = () => {
    const { classes, labels } = this.props;
    const { selectedIndex } = this.state;
    return (
      <div className={cx(classes.root)}>
        <div className={cx(classes.buttons)}>
          {labels.map((label, index) => (
            <div
              data-test={`button-${index}`}
              onClick={() => {
                this._handleChange(index);
              }}
              className={cx(classes.button, {
                active: selectedIndex === index,
              })}
              key={index}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          className={cx(classes.highlighter, {
            'is-at-first': selectedIndex === 0,
            'is-at-last': selectedIndex === labels.length - 1,
          })}
          style={{
            left: `${(100 / labels.length) * selectedIndex}%`,
          }}
        />
      </div>
    );
  };

  render() {
    let { classes, title, id } = this.props;
    return (
      <ErrorBoundary>
        <div className={cx(classes.component)} id={id}>
          <div className={classes.labelWrapper}>
            {Boolean(title) && <div className={classes.label}>{title}</div>}
          </div>
          {this._renderButtons()}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<ToggleButtonProps>(styles)(ToggleButton);
