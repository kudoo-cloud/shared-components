/* @flow */
import * as React from 'react';

export type DatePickerProps = {
  /** Set as disabled button */
  isDisabled?: boolean,
  /** placeholder */
  placeholder?: string,
  /** date **/
  value: string,
  /** Format of date */
  dateFormat?: string,
  /** Label */
  label?: string,
  /** button color */
  buttonColor?: string,
  /** Handler to be called when the user select date. */
  onDateChange: Function,
  /** text field props */
  textFieldProps: Object,
  /** calendar props */
  calendarProps: Object,
  /** classes **/
  classes: Object,
};
