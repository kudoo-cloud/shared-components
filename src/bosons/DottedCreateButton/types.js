/* @flow */
import * as React from 'react';

export type DottedCreateButtonProps = {
	id: string,
  /** button text **/
  text?: string,
  /** button text color **/
  textColor?: string,
  /** function will be called on on click **/
  onClick?: Function,
  /** icon , react node **/
  icon?: React.Node,
  /** icon color **/
  iconColor?: string,
  /** classes **/
  classes: Object,
};
