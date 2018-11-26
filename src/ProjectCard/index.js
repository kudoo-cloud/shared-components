/* @flow */
import * as React from 'react';
import type { ProjectCardProps } from './types';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {};

class ProjectCard extends React.Component<ProjectCardProps, State> {
  static propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.oneOf(['darkBlue', 'green']),
    companyName: PropTypes.string,
    projectStatus: PropTypes.string,
    invoiceStatus: PropTypes.string,
    invoiceStatusColor: PropTypes.oneOf(['orange', 'green']),
    invoiceDate: PropTypes.string,
    onEditClick: PropTypes.func,
    classes: PropTypes.object, // comes from withStyles HOC
  };

  static defaultProps = {
    titleColor: 'darkBlue',
    invoiceStatusColor: 'green',
    onEditClick: () => {},
  };

  render() {
    let {
      classes,
      title,
      companyName,
      projectStatus,
      // invoiceStatus,
      // invoiceDate,
      onEditClick,
    } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component} data-test={`project-${title}`}>
          <div className={classes.wrapper}>
            <div className={classes.titleWrapper}>
              <div className={classes.title}>{title}</div>
              <i
                className={cx('ion-edit', classes.editIcon)}
                onClick={onEditClick}
              />
            </div>
            <div className={classes.infoWrapper}>
              <div className={classes.companyName}>{companyName}</div>
              <div className={classes.projectStatus}>{projectStatus}</div>
              {/* <div className={classes.invoiceRow}>
                <div className={classes.invoiceStatus}>{invoiceStatus}</div>
                <div className={classes.invoiceDate}>{invoiceDate}</div>
              </div> */}
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(ProjectCard);
