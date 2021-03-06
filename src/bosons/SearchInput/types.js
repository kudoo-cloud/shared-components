/* @flow */
import * as React from 'react';
import type { TextFieldProps } from 'components/bosons/TextField/types';

export type SearchInputProps = {
  ...$Exact<TextFieldProps>,
  /**  searched items **/
  items: Array<any>,
  /** callback will be called when user click on search icon **/
  onSearch: Function,
  /** callback will be called when user click on searched item **/
  onItemClick: Function,
  /** callback will be called when user type in Input field **/
  onInputChange: Function,
  /** custom render item **/
  renderItem: Function,
  /** custom label key */
  labelKey: String,
  /** whether to show search icon or not **/
  showSearchIcon: boolean,
  /** loading **/
  searchLoading: boolean,
  /**default input value **/
  defaultInputValue: string,
};
