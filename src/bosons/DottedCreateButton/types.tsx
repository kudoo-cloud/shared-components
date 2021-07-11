import * as React from 'react';

export type DottedCreateButtonProps = {
  id: string;
  /** button text **/
  text?: string;
  /** button text color **/
  textColor?: string;
  /** function will be called on on click **/
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** icon , react node **/
  icon?: React.ReactNode;
  /** icon color **/
  iconColor?: string;
  /** classes **/
  classes?: any;
};
