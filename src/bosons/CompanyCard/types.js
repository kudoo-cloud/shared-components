/* @flow */
import * as React from 'react';

export type CardProps = {
  /** label **/
  primaryLabel?: string,
  /** button text color **/
  secondaryLabel?: string,
  /** function will be called on  click **/
  onClick?: Function,
  /** function will be called on setting button click **/
  onSettingClick?: Function,
  /** border color **/
  borderColor?: string,
  /** image url **/
  imageUrl?: string,
  /** is joined company flag **/
  isJoinedCompany: boolean,
  /** classes **/
  classes: Object,
};
