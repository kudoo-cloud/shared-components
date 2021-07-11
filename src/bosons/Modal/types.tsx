
import * as React from 'react';
import { ButtonProps } from 'components/bosons/Button/types';
import { withStylesFlowType } from 'components/config/types';

export type ModalProps = {
  /** Modal is visible or not **/
  visible?: boolean;
  /** overlay color **/
  overlayColor?: string;
  /** on close **/
  onClose?: () => void;
  /* title */
  title?: React.ReactNode | string;
  /* title color */
  titleColor?: string;
  /* description */
  description?: React.ReactNode | string;
  /* buttons */
  buttons?: Array<ButtonProps>;
  /* custom render method */
  renderContent?: Function;
  /* show close button */
  showCloseButton?: boolean;
} & withStylesFlowType;
