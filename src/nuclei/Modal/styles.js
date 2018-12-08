/* @flow */

import type { Theme } from 'components/config/theme';

export default (theme: Theme) => ({
  component: {
    backgroundColor: (props: any) => props.overlayColor,
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    overflow: 'auto',
    padding: 20,
  },
  content: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: 650,
    minHeight: 100,
    minWidth: 320,
  },
  title: {
    padding: '30px',
    fontSize: 24,
    fontFamily: theme.typography.font.family1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.primary.color2,
  },
  description: {
    padding: '0px 30px 30px',
    fontSize: 17,
    fontFamily: theme.typography.font.family2,
    color: theme.palette.blueGrey['50'],
    flex: 1,
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    color: 'white',
    whiteSpace: 'nowrap',
    flex: 1,
    height: '60px !important',
    '&:first-child': {
      borderBottomLeftRadius: 5,
    },
    '&:last-child': {
      borderBottomRightRadius: 5,
    },
    '&.cancel': {
      backgroundColor: theme.palette.grey['100'],
      border: `2px solid ${theme.palette.grey['100']}`,
    },
  },
  cancelButtonText: {
    color: theme.palette.blueGrey['50'],
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    fontSize: 20,
    color: theme.palette.blueGrey['50'],
  },
});
