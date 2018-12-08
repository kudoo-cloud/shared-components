/* @flow */
import * as React from 'react';

export type ButtonProps = {
  /** Set as disabled button */
  isDisabled?: boolean,
  /** Text to display in the button */
  title: string | React.Element<any>,
  /** type of the button */
  type: string,
  /** icon before the button text **/
  iconBefore?: React.Element<any> | null,
  /** icon after the button text **/
  iconAfter?: React.Element<any> | null,
  /** Handler to be called when the user click. */
  onClick?: Function,
  /** Id value to be passed to the html input. */
  id?: string,
  /** button height **/
  height?: string | number,
  /** button width **/
  width?: string | number,

  maxWidth?: string | number,

  /** button color **/
  buttonColor?: string,
  /** href, when href is set , it will be considered as a tag **/
  href?: string,
  /** whether apply border radius **/
  applyBorderRadius?: boolean,
  /** compact mode **/
  compactMode?: boolean,
  /** no background **/
  withoutBackground?: boolean,
  /**  target **/
  target?: string,
  /**  is loading **/
  loading?: boolean,
  /** loading icon **/
  loadingIcon?: React.Node,
  /** classes **/
  classes: Object,
};
