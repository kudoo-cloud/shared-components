/* @flow */
import * as React from 'react';
import type { TooltipProps } from './types';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tooltip as BaseTooltip } from 'react-tippy';
import { withStylesProps } from 'src/config/types';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {
  isVisible: boolean,
};

class Tooltip extends React.Component<TooltipProps, State> {
  static propTypes = {
    /* Plain string */
    title: PropTypes.string,
    /* Tooltip content. If you don't define html, the title will be used */
    html: PropTypes.node,
    /** Specifies the type of transition animation a tooltip has. */
    animation: PropTypes.oneOf([
      'shift',
      'perspective',
      'fade',
      'scale',
      'none',
    ]),
    /** Specifies which direction to position the tooltip on the element. */
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** Adds an arrow pointing to the tooltipped element. */
    arrow: PropTypes.bool,
    /** Specifies how big the tooltip's arrow is. */
    arrowSize: PropTypes.oneOf(['small', 'regular', 'big']),
    /** Callback when the tooltip has been triggered and has started to transition in */
    onShow: PropTypes.func,
    /** Callback when the tooltip has begun to transition out */
    onHide: PropTypes.func,
    /** Specifies which type of events will trigger a tooltip to show. Separate each by a space. mouseenter is for hovering and touch on mobile, and focus is for keyboard navigation. */
    trigger: PropTypes.string,
    children: PropTypes.func,
    ...withStylesProps,
  };

  static defaultProps = {
    title: '',
    onShow: () => {},
    onHide: () => {},
    position: 'top',
    arrowSize: 'regular',
    arrow: true,
    trigger: 'mouseenter focus',
    animation: 'fade',
    children: null,
  };

  state = {
    isVisible: false,
  };

  render() {
    const {
      classes,
      children,
      title,
      html,
      position,
      animation,
      arrow,
      onShow,
      onHide,
      trigger,
      theme, // eslint-disable-line
      ...rest
    } = this.props;
    const { isVisible } = this.state;
    return (
      <ErrorBoundary>
        <div className={cx(classes.component)}>
          <BaseTooltip
            {...rest}
            title={title}
            html={html}
            animation={animation}
            position={position}
            arrow={arrow}
            arrowType="round"
            onShow={() => {
              this.setState({ isVisible: true });
              onShow();
            }}
            onHide={() => {
              this.setState({ isVisible: false });
              onHide();
            }}
            trigger={trigger}
            theme="dark">
            {children({ isVisible })}
          </BaseTooltip>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(Tooltip);
