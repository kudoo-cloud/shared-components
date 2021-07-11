
import * as React from 'react';

export type LinearProgressBarProps = {
  /** Text to display */
  label: string,
  /** show percentage(default true) */
  showPercentage?: boolean,
  /** show parts(default true) */
  showParts?: boolean,
  /** rounded bar(default true) */
  rounded?: boolean,
  /** filled color */
  filledColor?: string,
  /** unfilled color */
  unfilledColor?: string,
  /** value **/
  value: number,
  /** width **/
  width?: number,
  /** classes **/
  classes?: any,
};
