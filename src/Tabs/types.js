/* @flow */
import * as React from 'react';

export type TabsProps = {
  /** array of tabs **/
  tabs: Array<{ label: string, onClick?: Function }>,
  /** This function will be called when tab changes **/
  onChange?: Function,
  /** Active Tab Index **/
  activeIndex?: number,
  /** Theme : Secondary / Tertiary **/
  tabTheme?: 'secondary' | 'tertiary',
  /** classes **/
  classes: Object,
};
