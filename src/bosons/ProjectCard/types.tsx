/** @flow **/
import * as React from 'react';

export type ProjectCardProps = {
  /** title **/
  title?: string;
  /** title color **/
  titleColor?: 'orange' | 'green' | string;
  /** daoName **/
  daoName?: string;
  /** project status **/
  projectStatus?: string;
  /** invoice status **/
  invoiceStatus?: string;
  /** invoice status color **/
  invoiceStatusColor?: 'orange' | 'green' | string;
  /** invoice date **/
  invoiceDate?: string;
  /** on edit click **/
  onEditClick?: React.MouseEventHandler<HTMLElement>;
  /** classes **/
  classes?: any;
};
