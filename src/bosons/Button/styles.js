/* @flow */

import type { Theme } from 'components/config/theme';
import type { ButtonProps } from './types';

export default (theme: Theme) => ({
  component: {
    textDecoration: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: (props: ButtonProps) =>
      props.applyBorderRadius ? (props.compactMode ? '20px' : '35px') : 0,
    height: (props: ButtonProps) => props.height || 'auto',
    maxWidth: (props: ButtonProps) => props.maxWidth,
    width: (props: ButtonProps) =>
      props.width || (!props.href ? '100%' : undefined),
    padding: (props: ButtonProps) => (props.compactMode ? '10px' : '15px 10px'),
    backgroundColor: (props: ButtonProps) =>
      props.withoutBackground
        ? 'transparent'
        : props.buttonColor || theme.palette.primary.color1,
    border: (props: ButtonProps) =>
      `2px solid ${props.buttonColor || theme.palette.primary.color1}`,
    '&.disabled': {
      pointerEvents: 'none',
      opacity: 0.4,
    },
  },
  text: {
    fontSize: 16,
    fontFamily: theme.typography.font.family2,
    margin: '0px 10px',
    color: (props: ButtonProps) =>
      props.withoutBackground
        ? props.buttonColor || theme.palette.primary.color1
        : 'white',
  },
  icon: {
    fontSize: 16,
    color: 'white',
  },
  afterIcon: {
    marginRight: 10,
  },
  beforeIcon: {
    marginLeft: 10,
  },
});
