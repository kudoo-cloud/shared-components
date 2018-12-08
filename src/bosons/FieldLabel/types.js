/* @flow */
import * as React from 'react';

export type FieldLabelProps = {
  /** label text */
  label: string,
  /** label text color */
  labelColor: string,
  /** extra link with label */
  extraLinkWithLabel?: string,
  /** on click extra link **/
  onExtraLinkClicked?: string,
  /** classes **/
  classes: Object,
};
