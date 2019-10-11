import * as React from 'react';
import { IComponentProps } from 'shared/src/atoms/Footer/types';

export type StyleKeys =
  | 'component'
  | 'label'
  | 'textInputWrapper'
  | 'leftIcon'
  | 'textInput'
  | 'textarea'
  | 'xIcon'
  | 'eyeIcon'
  | 'error';

export type ReactInputKeyboardEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLTextAreaElement>;

export type ReactInputFocusEvent =
  | React.FocusEvent<HTMLInputElement>
  | React.FocusEvent<HTMLTextAreaElement>;

export type ReactInputChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export type TextFieldProps = IComponentProps<StyleKeys> & {
  /** Standard HTML input autocomplete attribute. */
  autoComplete?: string | 'on' | 'off';
  /** Type value to be passed to the html input. */
  type?: string;
  /** Sets the field as uneditable, with a changed hover state. */
  disabled?: boolean;
  /** If true, prevents the value of the input from being edited. */
  isReadOnly?: boolean;
  /** Add asterisk to label. Set required for form that the field is part of. */
  required?: boolean;
  /** Sets error message. */
  error?: string;
  /** Custom Error Color */
  errorColor?: string;
  /** show error message or not when input state is invalid,
   it is to hide error message only , it will still show invalid state of input field. */
  showErrorMessage?: boolean;
  /** Label to be displayed above the input. */
  label?: string;
  /** Name value to be passed to the html input. */
  name?: string;
  /** Text to display in the input if the input is empty. */
  placeholder?: string;
  /** Placeholder text color **/
  placeholderColor?: string;
  /** The value of the input. */
  value?: string;
  /** Handler to be called when the input loses focus. */
  onBlur?: (event: ReactInputFocusEvent) => void;
  /** Handler to be called when the input changes. */
  onChangeText?: (value: string | number) => void;
  /** Handler to be called when the input changes. */
  onChange?: (event: ReactInputChangeEvent) => void;
  /** Handler to be called when the input receives focus. */
  onFocus?: (event: ReactInputFocusEvent) => void;
  /** Standard input onkeydown event. */
  onKeyDown?: (event: ReactInputKeyboardEvent) => void;
  /** Standard input onkeypress event. */
  onKeyPress?: (event: ReactInputKeyboardEvent) => void;
  /** Standard input onkeyup event. */
  onKeyUp?: (event: ReactInputKeyboardEvent) => void;
  /** Id value to be passed to the html input. */
  id?: string;
  /** Sets whether the component should be automatically focused on component render. */
  autoFocus?: boolean;
  /** Apply border radius to top corners */
  applyTopBorderRadius?: boolean;
  /** Apply border radius to bottom corners */
  applyBottomBorderRadius?: boolean;
  /** Apply No border radius */
  noBorderRadius?: boolean;
  /** Whether to show clear icon or not */
  showClearIcon?: boolean;
  /** icon component **/
  icon?: React.ReactNode;
  /** extra link with label **/
  extraLinkWithLabel?: string;
  /** on click extra link **/
  onExtraLinkClicked?: Function;
  /** is multiline : textarea **/
  multiline?: boolean;
  /** maxlength : textarea **/
  maxlength?: number;
  /** is number **/
  isNumber?: boolean;
  /** get ref **/
  getRef?: Function;
};
