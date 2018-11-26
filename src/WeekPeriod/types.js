/* @flow */
import * as React from 'react';

export type WeekPeriodProps = {
  year: any,
  month: any,
  date: any,
  /** on week change **/
	onWeekChange?: Function,
	startWeekDay: any,
	endWeekDay: any,
  /** classes **/
  classes: Object,
};
