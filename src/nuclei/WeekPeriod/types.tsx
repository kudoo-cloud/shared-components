
import * as React from 'react';

export type WeekPeriodProps = {
  /** year **/
  year: Number,
  /** week number **/
  week: Number,
  /** on week change **/
  onWeekChange?: Function,
  /** classes **/
  classes?: any,
};
