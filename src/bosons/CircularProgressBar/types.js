/* @flow */
import * as React from 'react';

export type CircularProgressBarProps = {
  /** filled color */
  filledColor: string,
  /** unfilled color */
  unfilledColor: string,
  /** value **/
  value: number,
  /** width **/
  width: number,
  /** stroke width **/
  strokeWidth: number,
  /** line shape **/
  lineShape: 'square' | 'round' | 'butt',
  /** children **/
  children: React.Node,
  /** classes **/
  classes: Object,
};
