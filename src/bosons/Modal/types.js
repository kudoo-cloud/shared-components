/* @flow */
import * as React from 'react';
import { type ButtonProps } from 'components/bosons/Button/types';
import { type withStylesFlowType } from 'components/config/types';

export type ModalProps = {
  /** Modal is visible or not **/
  visible?: boolean,
  /** overlay color **/
  overlayColor?: string,
  /** on close **/
  onClose: Function,
  /* title */
  title: React.Node | string,
  /* title color */
  titleColor: string,
  /* description */
  description: React.Node | string,
  /* buttons */
  buttons: Array<ButtonProps>,
  /* custom render method */
  renderContent: Function,
  /* show close button */
  showCloseButton: boolean,
  ...$Exact<withStylesFlowType>,
};
