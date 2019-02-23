/* @flow */
import * as React from 'react';
import PropTypes from 'prop-types';
import type { CardProps } from './types';
import cx from 'classnames';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import Button from 'components/bosons/Button';
import withStyles from 'components/hoc/withStyles';
// import './styles.scss';
import styles from './styles';

type State = {};

class SubscriptionCard extends React.Component<CardProps, State> {
  static propTypes = {
    type: PropTypes.string,
    price: PropTypes.string,
    period: PropTypes.string,
    shortDescription: PropTypes.string,
    highlighted: PropTypes.bool,
    onFindOutClick: PropTypes.func,
    classes: PropTypes.any,
  };

  static defaultProps = {};

  _renderCard() {
    let {
      type,
      price,
      period,
      shortDescription,
      highlighted,
      classes,
    } = this.props;

    let cardWrapperClass = cx(classes.root, { highlighted });
    let cardTypeClass = cx(classes.cardType, { highlighted });
    let cardDescClass = cx(classes.cardShortDesc, { highlighted });
    return (
      <div className={cardWrapperClass}>
        <div className={classes.cardInfoWrapper}>
          {price && <div className={classes.cardPrice}>{price}</div>}
          {period && <div className={classes.cardPeriod}>{period}</div>}
          {shortDescription && (
            <div className={cardDescClass}>{shortDescription}</div>
          )}
        </div>
        {type && <div className={cardTypeClass}>{type}</div>}
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>{this._renderCard()}</div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(SubscriptionCard);
