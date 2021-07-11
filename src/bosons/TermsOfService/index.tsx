
import * as React from 'react';
import type { TermsOfServiceProps } from './types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import termsOfService from './termsOfService.md';
import styles from './styles';

type State = {};

class TermsOfService extends React.Component<TermsOfServiceProps, State> {
  render() {
    let { classes } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <div dangerouslySetInnerHTML={{ __html: termsOfService.contents }} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<TermsOfServiceProps>(styles)(TermsOfService);
