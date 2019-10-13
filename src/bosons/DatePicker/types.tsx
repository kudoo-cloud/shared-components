import { TextFieldProps } from 'components/bosons/TextField/types';

export type StyleKeys =
  | 'component'
  | 'wrapper'
  | 'inputWrapper'
  | 'textInputWrapper'
  | 'textInput'
  | 'calendarButton'
  | 'modalWrapper'
  | 'calendarWrapper'
  | 'buttons'
  | 'rightButtons'
  | 'button'
  | 'overlayWrapper';

export type DatePickerProps = withStylesHOCProps<StyleKeys> & {
  name?: string;
  /** Set as disabled button */
  isDisabled?: boolean;
  /** placeholder */
  placeholder?: string;
  /** date **/
  value?: string | Date;
  /** Format of date */
  dateFormat?: string;
  /** Label */
  label?: string;
  /** button color */
  buttonColor?: string;
  /** Handler to be called when the user select date. */
  onDateChange?: Function;
  /** text field props */
  textFieldProps?: TextFieldProps;
  /** calendar props */
  calendarProps?: Object;
};
