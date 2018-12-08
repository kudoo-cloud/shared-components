/* @flow */
import * as React from 'react';
import type { WeekPeriodProps } from './types';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TriangleArrow from 'components/bosons/TriangleArrow';
import FieldLabel from 'components/bosons/FieldLabel';
import moment from 'moment';
import styles from './styles';

moment.locale('en-us', {
  week: {
    dow: 1, // Monday is the first day of the week.
  },
});

type State = {
  startWeekDay: any,
  endWeekDay: any,
};

class WeekPeriod extends React.Component<WeekPeriodProps, State> {
  static propTypes = {
    month: PropTypes.any,
    year: PropTypes.any,
    date: PropTypes.any,
    onWeekChange: PropTypes.func,
    startWeekDay: PropTypes.any,
    endWeekDay: PropTypes.any,
    classes: PropTypes.object, // will come from withStyles HOC
  };

  constructor(props) {
    super(props);
    this.state = {
      startWeekDay: moment()
        .startOf('week')
        .format(),
      endWeekDay: moment()
        .endOf('week')
        .format(),
    };
  }

  componentDidMount() {
    this._updateWeekPeriod(this.props);
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (props.year !== prevProps.year) {
      this._updateWeekPeriod(props, 'year');
    }
    if (props.month !== prevProps.month) {
      this._updateWeekPeriod(props, 'month');
    }
    if (props.date !== prevProps.date) {
      this._updateWeekPeriod(props, 'date');
    }
    if (props.startWeekDay !== prevProps.startWeekDay) {
      this.setState({
        startWeekDay: props.startWeekDay,
      });
    }
    if (props.endWeekDay !== prevProps.endWeekDay) {
      this.setState({
        endWeekDay: props.endWeekDay,
      });
    }
  }

  _updateWeekPeriod = (props, updatedType) => {
    let { year, month, date } = props;
    if (typeof year === 'undefined') {
      year = moment().year();
    }

    if (typeof month === 'undefined') {
      month = moment().month();
    }

    if (typeof date === 'undefined') {
      date = moment().date();
    }

    let startWeekDay;

    if (updatedType === 'year') {
      if (
        this.state.startWeekDay &&
        moment(this.state.startWeekDay).year() === year
      ) {
        startWeekDay = this.state.startWeekDay;
      } else {
        date = 1;
        month = 0;
        const tempStartWeekDay = moment()
          .year(year)
          .month(month)
          .date(date)
          .startOf('isoWeek');
        if (tempStartWeekDay.year() === year) {
          // tempStartWeekDay is in selected month so keep it
          startWeekDay === tempStartWeekDay.format();
        } else {
          // tempStartWeekDay is not in selected month so find next week first day
          const tempEndWeekDay = moment()
            .year(year)
            .month(month)
            .date(date)
            .endOf('isoWeek');
          startWeekDay = tempEndWeekDay.add(1, 'days').format();
        }
      }
    }

    if (updatedType === 'month') {
      if (
        this.state.startWeekDay &&
        moment(this.state.startWeekDay).month() === month
      ) {
        startWeekDay = this.state.startWeekDay;
      } else {
        date = 1;
        const tempStartWeekDay = moment()
          .year(year)
          .month(month)
          .date(date)
          .startOf('isoWeek');

        if (tempStartWeekDay.month() === month) {
          // tempStartWeekDay is in selected month so keep it
          startWeekDay === tempStartWeekDay.format();
        } else {
          // tempStartWeekDay is not in selected month so find next week first day
          const tempEndWeekDay = moment()
            .year(year)
            .month(month)
            .date(date)
            .endOf('isoWeek');
          startWeekDay = tempEndWeekDay.add(1, 'days').format();
        }
      }
    }

    if (!startWeekDay) {
      startWeekDay = moment()
        .year(year)
        .month(month)
        .date(date)
        .startOf('isoWeek')
        .format();
    }

    const weekObj = {
      startWeekDay,
      endWeekDay: moment(startWeekDay)
        .add(6, 'days')
        .format(),
    };
    this.setState(weekObj, () => {
      if (this.props.onWeekChange) {
        this.props.onWeekChange(weekObj);
      }
    });
  };

  _goToNextWeek = () => {
    const { endWeekDay } = this.state;
    const nextWeekStartWeekDay = moment(endWeekDay).add(1, 'days');
    const nextWeekEndWeekDay = moment(endWeekDay).add(7, 'days');
    const weekObj = {
      startWeekDay: nextWeekStartWeekDay.format(),
      endWeekDay: nextWeekEndWeekDay.format(),
    };
    this.setState(weekObj, () => {
      if (this.props.onWeekChange) {
        this.props.onWeekChange(weekObj);
      }
    });
  };

  _goToPrevWeek = () => {
    const { startWeekDay } = this.state;
    const prevWeekStartWeekDay = moment(startWeekDay).subtract(7, 'days');
    const prevWeekEndWeekDay = moment(startWeekDay).subtract(1, 'days');
    const weekObj = {
      startWeekDay: prevWeekStartWeekDay.format(),
      endWeekDay: prevWeekEndWeekDay.format(),
    };
    this.setState(weekObj, () => {
      if (this.props.onWeekChange) {
        this.props.onWeekChange(weekObj);
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { startWeekDay, endWeekDay } = this.state;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <FieldLabel label="Week Period" />
          <div className={classes.root}>
            <div
              className={cx(classes.button, classes.prevButton)}
              onClick={this._goToPrevWeek}>
              <TriangleArrow
                direction={'left'}
                classes={{ arrow: classes.arrow }}
              />
            </div>
            <div className={classes.dateText}>
              {moment(startWeekDay).format('DD MMM YYYY')} -{' '}
              {moment(endWeekDay).format('DD MMM YYYY')}
            </div>
            <div
              className={cx(classes.button, classes.nextButton)}
              onClick={this._goToNextWeek}>
              <TriangleArrow
                direction={'right'}
                classes={{ arrow: classes.arrow }}
              />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(WeekPeriod);
