/* @flow */
import * as React from 'react';

export type ToggleButtonProps = {
	id: string,
	
  title?: string,
  /** labels **/
  labels: Array<string>,
  /** active button color **/
  activeColor?: string,
  /** called when selection change **/
  onChange?: Function,
  /** selected button index **/
  selectedIndex?: number,
  /** classse **/
  classes: Object,
};
