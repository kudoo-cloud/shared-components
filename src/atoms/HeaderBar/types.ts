/* @flow */
import * as React from 'react';

export type StyleKeys =
  | 'component'
  | 'headerLeft'
  | 'headerLabel'
  | 'headerRight'
  | 'smallBtn'
  | 'smallBtnIcon'
  | 'userBtn'
  | 'userName'
  | 'userMenuOverlay'
  | 'userMenu'
  | 'userMenuItem'
  | 'userMenuItemLabel'
  | 'userMenuItemIcon';

export interface ProductType {
  key: string;
  value: string;
}

export interface HeaderBarProps
  extends withRouterHOCProps,
    withStylesHOCProps<StyleKeys> {
  /** header label **/
  headerLabel?: string;
  /** actions, this comes automatically from parent **/
  actions?: any;
  profile?: {
    firstName: string;
    lastName: string;
  };
  logout?: Function;
  height?: number;
  noOfCompanies?: number;
  products: ProductType[];
  initialSelectedProductIndex?: number;
  onSelectProduct?: (index: number, data: ProductType) => void;
}
