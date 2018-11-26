/* @flow */

import type { Theme } from 'src/config/theme';
import type { TextFieldProps } from './types';

export default (theme: Theme) => ({
  component: {
    fontFamily: theme.typography.font.family2,
    flex: 1,
    color: (props: TextFieldProps) => '',
  },
  label: {
    '$component.error &': {
      color: (props: TextFieldProps) =>
        props.errorColor || theme.palette.secondary.color1,
    },
  },
  textInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'transparent',
    padding: (props: TextFieldProps) => (props.multiline ? 0 : '0px'),
    borderRadius: 5,
    '&.top-border-radius': {
      borderRadius: 0,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
    },
    '&.bottom-border-radius': {
      borderRadius: 0,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
    },
    '&.no-border-radius': {
      borderRadius: 0,
    },
    '&.focus': {
      backgroundColor: 'white',
    },
    '$component.error &': {
      backgroundColor: (props: TextFieldProps) =>
        props.errorColor || theme.palette.secondary.color1,
      color: 'white',
    },
    '&.is-filled': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  leftIcon: {
    fontSize: 25,
    padding: '0px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    '$component.error &': {
      color: 'white',
    },
  },
  textInput: {
    backgroundColor: 'transparent',
    outline: 'none',
    padding: '10px 15px 10px 15px',
    width: '100%',
    fontFamily: theme.typography.font.family2,
    fontSize: 15,
    minHeight: 30,
    border: '0px solid',
    color: 'inherit',
    '$component.error &': {
      color: 'white',
    },
    // change placeholder color
    '&::-webkit-input-placeholder': {
      color: (props: TextFieldProps) =>
        props.placeholderColor || theme.palette.grey[300],
      '$component.error &': {
        color: 'white',
      },
    },
    '&::-moz-placeholder': {
      color: (props: TextFieldProps) =>
        props.placeholderColor || theme.palette.grey[300],
      '$component.error &': {
        color: 'white',
      },
    },
    '&::-ms-input-placeholder': {
      color: (props: TextFieldProps) =>
        props.placeholderColor || theme.palette.grey[300],
      '$component.error &': {
        color: 'white',
      },
    },
  },
  textarea: {
    minHeight: 100,
    resize: 'vertical',
    padding: 10,
  },
  xIcon: {
    fontSize: 20,
    cursor: 'pointer',
    display: 'flex',
    padding: '0px 10px',
    '$component.error &': {
      color: 'white',
    },
  },
  eyeIcon: {
    padding: '0px 10px',
    cursor: 'pointer',
    fontSize: 25,
    '$component.error &': {
      color: 'white',
    },
    '&.show': {
      color: theme.palette.primary.color2,
    },
  },
  error: {
    fontWeight: 300,
    fontSize: 14,
    color: (props: TextFieldProps) =>
      props.errorColor || theme.palette.secondary.color1,
    marginBottom: 10,
    marginTop: 3,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    wordBreak: 'normal',
    wordWrap: 'normal',
    overflow: 'hidden',
  },
});
