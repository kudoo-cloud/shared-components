/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { type JumbotronProps } from './types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import Button from 'components/bosons/Button';
import styles from './styles';

type State = {};

class Jumbotron extends Component<JumbotronProps, State> {
  static propTypes = {
    href: PropTypes.string,
    hrefText: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    footerText: PropTypes.string,
    classes: PropTypes.object,
  };

  render() {
    const {
      classes,
      title,
      description,
      hrefText,
      href,
      footerText,
    } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <div className={classes.title}>{title}</div>
          {description && (
            <div className={classes.description}>{description}</div>
          )}
          {hrefText && (
            <Button
              href={href}
              maxWidth={400}
              width="80%"
              applyBorderRadius
              title={hrefText}
            />
          )}
          {footerText && <div className={classes.footerText}>{footerText}</div>}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(Jumbotron);
