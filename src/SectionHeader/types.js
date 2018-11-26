/** @flow **/
import * as React from 'react';

export type SectionHeaderProps = {
  /** title **/
  title: string,
  /** subtitle **/
  subtitle: string,
  /** function to render left part **/
  renderLeftPart?: Function,
  /** classes **/
  classes: Object,
};
