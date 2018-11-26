/* @flow */
import * as React from 'react';
import { type withStylesFlowType } from 'src/config/types';

export type TimesheetRowDisplayProps = {
  endWeekDay: any,
  startWeekDay: any,
  hideDaysLabel: boolean,
  project: { data: any, loading?: boolean },
  customer: { data: any, loading?: boolean },
  service: { data: any, loading?: boolean },
  timeSheetEntries: { data: Array<any>, loading?: boolean },
  ...$Exact<withStylesFlowType>,
};
