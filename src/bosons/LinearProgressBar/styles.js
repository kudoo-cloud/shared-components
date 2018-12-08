/* @flow */

import type { Theme } from 'components/config/theme';
import type { LinearProgressBarProps } from './types';

export default (theme: Theme) => ({
  component: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontFamily: theme.typography.font.family2,
    color: theme.palette.blueGrey['50'],
    fontWeight: 400,
    fontSize: 15,
    marginRight: 20,
  },
  percentage: {
    fontFamily: theme.typography.font.family2,
    color: '#c4c4c4',
    fontWeight: 400,
    fontSize: 15,
    marginLeft: 20,
  },
  progressBar: {
    borderRadius: (props: LinearProgressBarProps) => (props.rounded ? 10 : 0),
    backgroundColor: (props: LinearProgressBarProps) =>
      `${props.unfilledColor}`,
    width: (props: LinearProgressBarProps) => props.width,
    height: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  filledBar: {
    position: 'absolute',
    backgroundColor: (props: LinearProgressBarProps) => `${props.filledColor}`,
    top: 0,
    bottom: 0,
    left: 0,
    width: (props: LinearProgressBarProps) => `${props.value}%`,
  },
  parts: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  part: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    borderRight: `1px solid ${theme.palette.grey['200']}`,
    '&.hide': {
      display: 'none',
    },
  },
});
