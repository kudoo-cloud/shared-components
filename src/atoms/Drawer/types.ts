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
  | 'selectedDAOName'
  | 'usernameWrapper'
  | 'moreRightArrow'
  | 'goToDAOIcon'
  | 'userMoreItem'
  | 'onlineStatus'
  | 'daoName'
  | 'manageDAOBtn'
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
  selectedDAO: {
    name: string;
    owner: boolean;
    id: number;
  };
  /** compnies list **/
  daos: Array<{
    name: string;
    owner: boolean;
    id: number;
  }>;
  onDAOClick: Function;
  renderMenuItem?: Function;
  menuItems: any[];
  manageDAOUrl?: string;
} & withStylesHOCProps<StyleKeys> &
  withRouterHOCProps;
