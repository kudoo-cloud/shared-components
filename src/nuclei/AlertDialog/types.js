/* @flow */
import * as React from 'react';

export type AlertDialogButtonFlowTypes = Array<{
  onClick: Function,
	label: string,
	id: string,
  color?: ?string,
  disabled?: boolean,
  style?: Object,
}>;

export type AlertDialogProps = {
  /** Title can be string or node or null **/
  title?: string | React.Node,
  /** Title color **/
  titleColor?: string,
  /** description **/
  description?: string | React.Node,
  /** buttons **/
  buttons: AlertDialogButtonFlowTypes,
  /** visible or not **/
  visible: boolean,
  /** classes **/
  classes: Object,
};
