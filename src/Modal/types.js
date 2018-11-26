/* @flow */
import * as React from 'react';
import { type ButtonProps } from 'components/Button/types';
import { type withStylesFlowType } from 'src/config/types';

export type ModalProps = {
  /** Modal is visible or not **/
  visible?: boolean,
  /** overlay color **/
  overlayColor?: string,
  /** on close **/
  onClose: Function,
  /* title */
  title: React.Node | string,
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
