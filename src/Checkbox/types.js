/* @flow */
import * as React from 'react';

export type CheckBoxProps = {
  /** label **/
  label?: string | any,
  /** checkbox color **/
  color?: string,
  /** called when state change **/
  onChange?: Function,
  /** disable checkbox **/
  disabled?: boolean,
  /** value of checkbox **/
  value?: boolean,
  /** compact checkbox **/
  size?: 'small' | 'medium' | 'large',
  /** error of checkbox **/
  error?: string,
  /* id of container */
  id: string,
  /** classes **/
  classes: Object,
};
