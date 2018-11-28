/* @flow */

import type { ToggleSwitchProps } from './types';
import type { Theme } from '../config/theme';

const switchWidth = 90;
const switchHeight = 40;
const compactSwitchWidth = 67;
const compactSwitchHeight = 28;
const circleIconWidth = 30;
const compactCircleIconWidth = 20;

export default (theme: Theme) => ({
  switchComponent: {},
  toggleSwitchWrapper: {
    display: 'inline-flex',
    position: 'relative',
  },
  root: {
    width: (props: ToggleSwitchProps) =>
      props.compact ? compactSwitchWidth : switchWidth,
  },
  label: {
    fontWeight: 300,
    fontSize: 16,
    color: theme.palette.grey['500'],
    margin: '10px 0px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    wordBreak: 'normal',
    wordWrap: 'normal',
    overflow: 'hidden',
    fontFamily: theme.typography.font.family2,
  },
  icon: {
    width: (props: ToggleSwitchProps) =>
      props.compact ? compactCircleIconWidth : circleIconWidth,
    height: (props: ToggleSwitchProps) =>
      props.compact ? compactCircleIconWidth : circleIconWidth,
    backgroundColor: (props: ToggleSwitchProps) =>
      props.offColor || theme.palette.grey['400'],
  },
  bar: {
    width: (props: ToggleSwitchProps) =>
      props.compact ? compactSwitchWidth : switchWidth,
    height: (props: ToggleSwitchProps) =>
      props.compact ? compactSwitchHeight : switchHeight,
    marginTop: (props: ToggleSwitchProps) => (props.compact ? -15 : -21),
    marginLeft: (props: ToggleSwitchProps) => (props.compact ? -26 : -41),
    borderRadius: 25,
    border: `1px solid ${theme.palette.grey['400']}`,
    backgroundColor: 'white',
  },
  checked: {
    transform: (props: ToggleSwitchProps) =>
      props.compact ? 'translateX(37px)' : 'translateX(50px)',
    '& + $bar': {
      backgroundColor: 'white !important',
      opacity: 1,
    },
    '& $icon': {
      backgroundColor: (props: ToggleSwitchProps) =>
        props.onColor || theme.palette.primary.color2,
    },
  },
  offLabel: {
    position: 'absolute',
    top: 15,
    right: (props: ToggleSwitchProps) => (props.compact ? 0 : 5),
    fontFamily: theme.typography.font.family2,
    fontWeight: 500,
    color: theme.palette.grey['400'],
    fontSize: (props: ToggleSwitchProps) => (props.compact ? 14 : 16),
  },
  onLabel: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontFamily: theme.typography.font.family2,
    fontWeight: 500,
    color: theme.palette.blueGrey['50'],
    fontSize: (props: ToggleSwitchProps) => (props.compact ? 14 : 16),
  },
});
