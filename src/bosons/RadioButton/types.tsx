import * as React from 'react';
import { IComponentProps } from 'shared/src/atoms/Footer/types';

export type StyleKeys =
  | 'radioComponent'
  | 'radioWrapper'
  | 'radioOuterCircle'
  | 'radioInnerCircle'
  | 'radioLabel';

export type RadioButtonProps = IComponentProps<StyleKeys> & {
  name?: string;
  /** id **/
  id?: string;
  /** label **/
  label?: string;
  /** raddio button color **/
  color?: string;
  /** called when state change **/
  onChange?: Function;
  /** disable radio button **/
  disabled?: boolean;
  /** value of radio button **/
  value?: boolean;
};
