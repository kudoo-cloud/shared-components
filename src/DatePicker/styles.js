/** @flow **/

import type { Theme } from 'src/config/theme';
import type { DatePickerProps } from './types';

export default (theme: Theme) => ({
  component: {},
  wrapper: {},
  inputWrapper: {
    display: 'flex',
    // alignItems: 'center',
    cursor: 'pointer',
  },
  textInputWrapper: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },
  textInput: {
    color: theme.palette.blueGrey['50'],
    fontWeight: '500',
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    cursor: 'pointer',
  },
  calendarButton: {
    backgroundColor: (props: DatePickerProps) =>
      props.buttonColor || theme.palette.primary.color2,
    padding: '0px 20px',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 24,
    color: 'white',
    cursor: 'pointer',
    marginTop: (props: DatePickerProps) =>
      props.textFieldProps.label ? '38px' : '0',
  },
  modalWrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s ease-in',
    opacity: 0.1,
    '&.entering': {
      opacity: 0.1,
    },
    '&.entered': {
      opacity: 1,
    },
  },
  calendarWrapper: {
    width: 400,
  },
  buttons: {
    backgroundColor: '#3E7EFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  rightButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    padding: '15px 20px',
    color: 'white',
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#4997FF',
    },
  },
  overlayWrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
