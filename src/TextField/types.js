/* @flow */
import * as React from 'react';

export type TextFieldProps = {
  /** Standard HTML input autocomplete attribute. */
  autoComplete?: 'on' | 'off',
  /** Type value to be passed to the html input. */
  type?: string,
  /** Sets the field as uneditable, with a changed hover state. */
  disabled?: boolean,
  /** If true, prevents the value of the input from being edited. */
  isReadOnly?: boolean,
  /** Add asterisk to label. Set required for form that the field is part of. */
  required?: boolean,
  /** Sets error message. */
  error?: string,
  /** Custom Error Color */
  errorColor?: string,
  /** show error message or not when input state is invalid,
   it is to hide error message only , it will still show invalid state of input field. */
  showErrorMessage?: boolean,
  /** Label to be displayed above the input. */
  label?: string,
  /** Name value to be passed to the html input. */
  name?: string,
  /** Text to display in the input if the input is empty. */
  placeholder?: string,
  /** Placeholder text color **/
  placeholderColor?: string,
  /** The value of the input. */
  value?: string,
  /** Handler to be called when the input loses focus. */
  onBlur?: Function,
  /** Handler to be called when the input changes. */
  onChangeText?: Function,
  /** Handler to be called when the input changes. */
  onChange?: Function,
  /** Handler to be called when the input receives focus. */
  onFocus?: Function,
  /** Standard input onkeydown event. */
  onKeyDown?: Function,
  /** Standard input onkeypress event. */
  onKeyPress?: Function,
  /** Standard input onkeyup event. */
  onKeyUp?: Function,
  /** Id value to be passed to the html input. */
  id?: string,
  /** Sets whether the component should be automatically focused on component render. */
  autoFocus?: boolean,
  /** Apply border radius to top corners */
  applyTopBorderRadius?: boolean,
  /** Apply border radius to bottom corners */
  applyBottomBorderRadius?: boolean,
  /** Apply No border radius */
  noBorderRadius?: boolean,
  /** Whether to show clear icon or not */
  showClearIcon?: boolean,
  /** icon component **/
  icon?: React.Element<any>,
  /** extra link with label **/
  extraLinkWithLabel?: string,
  /** on click extra link **/
  onExtraLinkClicked?: string,
  /** classes **/
  classes: Object,
  /** is multiline : textarea **/
  multiline?: boolean,
  /** maxlength : textarea **/
  maxlength?: number,
  /** is number **/
  isNumber?: boolean,
  /** get ref **/
  getRef: Function,
};
