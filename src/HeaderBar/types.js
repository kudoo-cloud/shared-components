/* @flow */
import * as React from 'react';
import type { withRouterFlowType } from 'src/config/types';

export type HeaderBarProps = {
  /** header label **/
  headerLabel?: string,
  /** actions, this comes automatically from parent **/
  actions?: Object,
  profile: Object,
  classes: Object,
  logout: Function,
  height: number,
  noOfCompanies: number,
  ...$Exact<withRouterFlowType>,
};
