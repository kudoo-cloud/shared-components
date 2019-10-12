import * as React from 'react';
import { IComponentProps } from 'shared/src/atoms/Footer/types';

export type StyleKeys =
  | 'component'
  | 'wrapper'
  | 'checkbox'
  | 'tickIcon'
  | 'label'
  | 'error';

export enum CheckboxSize {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

export type CheckBoxProps = IComponentProps<StyleKeys> & {
  /** label **/
  label?: string | any;
  /** checkbox color **/
  color?: string;
  /** called when state change **/
  onChange?: Function;
  /** disable checkbox **/
  disabled?: boolean;
  /** value of checkbox **/
  value?: boolean;
  /** compact checkbox **/
  size?: CheckboxSize;
  /** error of checkbox **/
  error?: string;
  /* id of container */
  id?: string;
};
