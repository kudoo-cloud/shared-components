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
  week: any,
  year: any,
};

class WeekPeriod extends React.Component<WeekPeriodProps, State> {
  static propTypes = {
    week: PropTypes.number,
    year: PropTypes.number,
    onWeekChange: PropTypes.func,
    classes: PropTypes.object, // will come from withStyles HOC
  };

  static defaultProps = {
    week: moment().week(),
    year: moment().year(),
    onWeekChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      week: props.week,
      year: props.year,
      startWeekDay: moment()
        .year(props.year)
        .week(props.week)
        .startOf('week')
        .format(),
      endWeekDay: moment()
        .year(props.year)
        .week(props.week)
        .endOf('week')
        .format(),
    };
  }

  componentDidMount() {
    this._updateWeekPeriod(this.props, 'mount');
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    const state = this.state;
    if (props.week !== prevProps.week && props.week !== state.week) {
      this._updateWeekPeriod(props, 'week');
    }
    if (props.year !== prevProps.year && props.year !== state.year) {
      this._updateWeekPeriod(props, 'year');
    }
  }

  _updateWeekPeriod = (props, updateType) => {
    const state = this.state;
    let finalYear = updateType === 'year' ? props.year : state.year;
    let finalWeek = updateType === 'week' ? props.week : state.week;
    const startWeekDay = moment()
      .year(finalYear)
      .week(finalWeek)
      .startOf('week')
      .format();
    const endWeekDay = moment()
      .year(finalYear)
      .week(finalWeek)
      .endOf('week')
      .format();

    let weekObj = {
      week: finalWeek,
      year: finalYear,
      month: moment(endWeekDay).month(),
      startWeekDay,
      endWeekDay,
    };

    this.setState(weekObj, () => {
      props.onWeekChange(weekObj);
    });
  };

  _handleWeekChange = isNext => event => {
    const { year, week } = this.state;
    const { onWeekChange } = this.props;
    const newWeek = moment()
      .year(year)
      .week(week);
    if (isNext) {
      newWeek.add(1, 'w');
    } else {
      newWeek.subtract(1, 'w');
    }
    const startWeekDay = newWeek.startOf('week').format();
    const endWeekDay = newWeek.endOf('week').format();
    const weekObj = {
      week: newWeek.week(),
      year: moment(endWeekDay).year(),
      month: moment(endWeekDay).month(),
      startWeekDay,
      endWeekDay,
    };
    this.setState(weekObj, () => {
      onWeekChange(weekObj);
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
              onClick={this._handleWeekChange(false)}>
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
              onClick={this._handleWeekChange(true)}>
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

export default withStyles<WeekPeriodProps>(styles)(WeekPeriod);
