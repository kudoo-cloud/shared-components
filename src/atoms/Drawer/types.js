/* @flow */
import * as React from 'react';
import {
  type withRouterFlowType,
  type withStylesFlowType,
} from 'components/config/types';

export type DrawerProps = {
  /** is drawer closed or not */
  closed?: boolean,
  /** callback will be called when drawer closed */
  onClose?: Function,
  /** callback will be called when drawer opened */
  onOpen?: Function,
  /** user object */
  selectedCompany: {
    name: string,
    owner: boolean,
    id: string,
  },
  /** compnies list **/
  companies: Array<{
    name: string,
    owner: boolean,
    id: string,
  }>,
  onCompanyClick: Function,
  ...$Exact<withStylesFlowType>,
  ...$Exact<withRouterFlowType>,
};
