import * as React from 'react';

export type StyleKeys =
  | 'component'
  | 'wrapper'
  | 'upperPart'
  | 'closeIconWrapper'
  | 'closeIcon'
  | 'hamburgerIconWrapper'
  | 'hamburgerIcon'
  | 'userImageWrapper'
  | 'userInitial'
  | 'selectedCompanyName'
  | 'usernameWrapper'
  | 'moreRightArrow'
  | 'goToCompanyIcon'
  | 'userMoreItem'
  | 'onlineStatus'
  | 'companyName'
  | 'manageCompanyBtn'
  | 'drawerItem'
  | 'itemIcon'
  | 'itemTitle'
  | 'kudooIconWraper'
  | 'kudooIconImage'
  | 'userWrapper'
  | 'userMoreWrapper';

export type DrawerProps = {
  /** is drawer closed or not */
  closed?: boolean;
  /** callback will be called when drawer closed */
  onClose?: Function;
  /** callback will be called when drawer opened */
  onOpen?: Function;
  /** user object */
  selectedCompany: {
    name: string;
    owner: boolean;
    id: number;
  };
  /** compnies list **/
  companies: Array<{
    name: string;
    owner: boolean;
    id: number;
  }>;
  onCompanyClick: Function;
  renderMenuItem?: Function;
  menuItems: any[];
} & withStylesHOCProps<StyleKeys> &
  withRouterHOCProps;
