/* @flow */
import * as React from 'react';
import type { WizardStepsProps } from './types';
import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

type State = {};

class WizardSteps extends React.Component<WizardStepsProps, State> {
  static propTypes = {
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        visited: PropTypes.bool,
        active: PropTypes.bool,
        label: PropTypes.string.isRequired,
        component: PropTypes.node.isRequired,
      })
    ),
    activeColor: PropTypes.string,
    visitedColor: PropTypes.string,
    onStepClick: PropTypes.func,
    classes: PropTypes.object, // comes from withStyles HOC
  };

  static defaultProps = {
    onStepClick: () => {},
  };

  _getActiveStep = () => {
    const { steps } = this.props;
    return _.find(steps, { active: true });
  };

  _renderSteps() {
    const { classes, steps, onStepClick } = this.props;
    return (
      <div className={classes.steps}>
        {steps.map((step, index) => {
          const isLastStep = steps.length - 1 === index;
          const stepClasses = cx(classes.step, {
            [classes.lastStep]: isLastStep,
            active: step.active,
            visited: step.visited,
          });
          return (
            <div
              className={stepClasses}
              key={index}
              onClick={() => {
                if (onStepClick) {
                  onStepClick(step, index);
                }
              }}>
              <div className={classes.barWrapper}>
                <div className={classes.stepCircle}>
                  <div className={classes.stepNumber}>{index + 1}</div>
                  <div className={classes.stepLabel}>{step.label}</div>
                </div>
                {!isLastStep && <div className={classes.stepBar} />}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  _renderStepComponent = () => {
    const activeStep = this._getActiveStep();
    if (!activeStep) {
      return null;
    }
    return activeStep.component;
  };

  render() {
    let { classes } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <div className={classes.wrapper}>
            {this._renderSteps()}
            {this._renderStepComponent()}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(WizardSteps);
