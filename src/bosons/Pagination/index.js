/* @flow */
import * as React from 'react';
import type { PaginationProps } from './types';
import cx from 'classnames';
// import _ from 'lodash';
import PropTypes from 'prop-types';
import BasePagination from 'rc-pagination';
import PaginationLocale from 'rc-pagination/lib/locale/en_US';

// import 'rc-pagination/assets/index.css';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

type State = {
  current: number,
};

class Pagination extends React.Component<PaginationProps, State> {
  static propTypes = {
    current: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number.isRequired,
    onPageChange: PropTypes.func,
    classes: PropTypes.object, // will come from withStyles HOC
  };

  static defaultProps = {
    pageSize: 10,
    onPageChange: () => {},
    current: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current || 1,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current) {
      this.setState({
        current: this.props.current,
      });
    }
  }

  onChange = page => {
    this.setState({
      current: page,
    });
    if (this.props.onPageChange) {
      this.props.onPageChange(page);
    }
  };

  itemRender = (current, type, element) => {
    const { classes } = this.props;
    if (type === 'page') {
      return (
        <div
          className={cx(
            classes.page,
            current === this.state.current && 'active'
          )}>
          {current}
        </div>
      );
    }
    if (type === 'jump-prev') {
      return <div className={classes.page}>...</div>;
    }
    if (type === 'jump-next') {
      return <div className={classes.page}>...</div>;
    }
    if (type === 'prev') {
      return <div className={cx(classes.page, classes.prevBtn)}>Prev</div>;
    }
    if (type === 'next') {
      return <div className={cx(classes.page, classes.nextBtn)}>Next</div>;
    }
    return element;
  };

  render() {
    const { classes, total, pageSize } = this.props;
    const { current } = this.state;
    const startItem = (current - 1) * pageSize;
    const endItem = startItem + pageSize;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <BasePagination
            locale={PaginationLocale}
            onChange={this.onChange}
            current={this.state.current}
            total={total}
            pageSize={pageSize}
            itemRender={this.itemRender}
            showLessItems
          />
          <div className={classes.numberWrapper}>
            {startItem + 1}-{endItem > total ? total : endItem} 0f {total}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(Pagination);
