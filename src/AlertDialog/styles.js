/* @flow */

import type { Theme } from 'src/config/theme';
import type { AlertDialogProps } from './types';

export default (theme: Theme) => ({
  component: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 10000,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    height: 0,
    transition: 'opacity 0.1s ease-in',
    '&.visible': {
      opacity: 1,
      height: '100vh',
    },
    '&.hide': {
      opacity: 0,
      height: 0,
    },
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 5,
    maxWidth: 600,
    minWidth: 600,
  },
  title: {
    padding: '60px 30px 30px 30px',
    fontSize: 24,
    fontFamily: theme.typography.font.family1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: (props: AlertDialogProps) =>
      props.titleColor || theme.palette.blueGrey['50'],
  },
  description: {
    padding: '0px 30px 60px 30px',
    fontSize: 17,
    fontFamily: theme.typography.font.family2,
    color: theme.palette.blueGrey['50'],
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: 25,
    cursor: 'pointer',
    backgroundColor: theme.palette.grey['100'],
    color: theme.palette.blueGrey['50'],
    fontSize: 17,
    fontWeight: 500,
    fontFamily: theme.typography.font.family2,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    flex: 1,
    '&:first-child': {
      borderBottomLeftRadius: 5,
    },
    '&:last-child': {
      borderBottomRightRadius: 5,
    },
    '&.disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },
  },
});
