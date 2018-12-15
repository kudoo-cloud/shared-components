import React from 'react';
import { compose, withState } from 'recompose';
import PropTypes from 'prop-types';

class ScrollObserver extends React.Component {
  static propTypes = {
    onBottomReached: PropTypes.func,
    onBottomReachedThreshold: PropTypes.number,
    onTopReached: PropTypes.func,
    onTopReachedThreshold: PropTypes.number,
  };

  static defaultProps = {
    onBottomReachedThreshold: 0,
    onTopReachedThreshold: 0,
  };

  isBottomReached = () => {
    const {
      setShouldSendBottomEvent,
      shouldSendBottomEvent,
      onBottomReachedThreshold,
    } = this.props;
    if (this.el) {
      const bottom = this.el.getBoundingClientRect().bottom;
      const offset = onBottomReachedThreshold;
      if (bottom > window.innerHeight + offset) {
        if (!shouldSendBottomEvent) {
          // turn on event sending
          setShouldSendBottomEvent(true);
        }
      }
      return bottom <= window.innerHeight + offset;
    }
  };

  isTopReached = () => {
    const {
      setShouldSendTopEvent,
      onTopReachedThreshold,
      shouldSendTopEvent,
    } = this.props;
    if (this.el) {
      const top = this.el.getBoundingClientRect().top;
      const offset = onTopReachedThreshold;
      if (top + offset < 0) {
        if (!shouldSendTopEvent) {
          // turn on event sending
          setShouldSendTopEvent(true);
        }
      }
      return top + offset >= 0;
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.observeScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.observeScrolling);
  }

  observeScrolling = () => {
    const {
      onBottomReached,
      onTopReached,
      setShouldSendBottomEvent,
      setShouldSendTopEvent,
      shouldSendTopEvent,
      shouldSendBottomEvent,
    } = this.props;
    if (onBottomReached && this.isBottomReached() && shouldSendBottomEvent) {
      onBottomReached(this.el);
      setShouldSendBottomEvent(false);
    }
    if (onTopReached && this.isTopReached() && shouldSendTopEvent) {
      onTopReached(this.el);
      setShouldSendTopEvent(false);
    }
  };

  render() {
    return <span ref={ref => (this.el = ref)}>{this.props.children}</span>;
  }
}

export default compose(
  withState('shouldSendBottomEvent', 'setShouldSendBottomEvent', true),
  withState('shouldSendTopEvent', 'setShouldSendTopEvent', true)
)(ScrollObserver);
