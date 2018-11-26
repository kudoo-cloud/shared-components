/* @flow */
import * as React from 'react';
import type { TermsOfServiceProps } from './types';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import { default as termsOfService } from './termsOfService.md';
import styles from './styles';

type State = {};

class TermsOfService extends React.Component<TermsOfServiceProps, State> {
  render() {
    let { classes } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <div dangerouslySetInnerHTML={{ __html: termsOfService }} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(TermsOfService);
