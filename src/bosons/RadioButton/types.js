/* @flow */
import * as React from 'react';

export type RadioButtonProps = {
  /** id **/
  id: string,
  /** label **/
  label?: string,
  /** raddio button color **/
  color?: string,
  /** called when state change **/
  onChange?: Function,
  /** disable radio button **/
  disabled?: boolean,
  /** value of radio button **/
  value?: boolean,
  classes: Object,
};
