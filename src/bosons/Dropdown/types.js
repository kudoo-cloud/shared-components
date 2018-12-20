/* @flow */
import * as React from 'react';

export type DropdownProps = {
  /** id **/
  id: string,
  /** label **/
  label?: string,
  /** placeholder **/
  placeholder?: string,
  /** called when item selection change **/
  onChange?: Function,
  /** on click of dropdown **/
  onClick?: Function,
  /** on dropdown close **/
  onClose?: Function,
  /** disable dropdown **/
  disabled?: boolean,
  /** selcted index  **/
  selectedIndex?: number | Array<number>,
  /** items to display in dropdown  **/
  items: Array<{ label: string, value: any }>,
  /** error **/
  error: string,
  /** should show error message (default : true) **/
  showErrorMessage?: boolean,
  /** value of selected item **/
  value: any,
  /** this is used to find selected value from given item  */
  comparator: Function,
  /** multiple: to allow multiple selection, default: false */
  multiple: boolean,
  /** classes  **/
  classes: Object,
};