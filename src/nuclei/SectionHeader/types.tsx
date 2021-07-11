/** @flow **/
import * as React from 'react';

export type SectionHeaderProps = {
  /** title **/
  title: string | React.ReactNode,
  /** subtitle **/
  subtitle?: string | React.ReactNode,
  /** function to render left part **/
  renderLeftPart?: Function,
  /** classes **/
  classes?: any,
};
