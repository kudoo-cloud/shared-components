import * as React from 'react';

export type TabsProps = {
  /** array of tabs **/
  tabs: Array<{ label: string; onClick?: () => void }>;
  /** This function will be called when tab changes **/
  onChange?: Function;
  /** Active Tab Index **/
  activeIndex?: number | boolean;
  /** Theme : Secondary / Tertiary **/
  tabTheme?: 'secondary' | 'tertiary';
  /** classes **/
  classes?: any;
};
