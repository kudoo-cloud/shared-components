/** @flow **/
import * as React from 'react';

export type ProjectCardProps = {
  /** title **/
  title?: string,
  /** title color **/
  titleColor?: 'orange' | 'green',
  /** companyName **/
  companyName?: string,
  /** project status **/
  projectStatus?: string,
  /** invoice status **/
  invoiceStatus?: string,
  /** invoice status color **/
  invoiceStatusColor?: 'orange' | 'green',
  /** invoice date **/
  invoiceDate?: string,
  /** on edit click **/
  onEditClick?: Function,
  /** classes **/
  classes: Object,
};
