import * as React from 'react';

export type CardProps = {
  /** label **/
  primaryLabel?: string;
  /** button text color **/
  secondaryLabel?: string;
  /** function will be called on  click **/
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** function will be called on setting button click **/
  onSettingClick?: React.MouseEventHandler<HTMLDivElement>;
  /** border color **/
  borderColor?: string;
  /** image url **/
  imageUrl?: string;
  /** is joined dao flag **/
  isJoinedDAO?: boolean;
  /** classes **/
  classes?: any;
};
