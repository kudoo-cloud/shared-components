/* @flow */
import * as React from 'react';
import type { TextFieldProps } from 'components/TextField/types';

export type PhoneNumberFieldProps = {
  ...$Exact<TextFieldProps>,
  id: string,
  /** show area code **/
  showAreaCode?: boolean,
  /** area code label **/
  areaCodeLabel?: string,
  /** area code value **/
  areaCodeValue?: string,
  /** area code placeholder **/
  areaCodePlaceholder?: string,
  /** phone number label **/
  phoneNumberLabel?: string,
  /** phone number value **/
  phoneNumberValue?: string,
  /** phone number placeholder **/
  phoneNumberPlaceholder?: string,
};
