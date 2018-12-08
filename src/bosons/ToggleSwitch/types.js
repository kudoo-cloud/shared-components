/* @flow */
import * as React from 'react';

export type ToggleSwitchProps = {
  /** label displayed when switch is off **/
  offLabel?: string,
  /** color when switch is off **/
  offColor?: string,
  /** label displayed when switch is on **/
  onLabel?: string,
  /** color when switch is on **/
  onColor?: string,
  /** called when state change **/
  onChange?: Function,
  /** disable switch **/
  disabled?: boolean,
  /** value of switch **/
  value?: boolean,
  /** switch label **/
  label?: string,
  /** compact switch **/
  compact?: boolean,
  /** classes **/
  classes: Object,
};
