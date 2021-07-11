

import type { Theme } from 'components/config/theme';
import type { CircularProgressBarProps } from './types';

export default (theme: Theme) => ({
  component: {
    width: (props: CircularProgressBarProps) => props.width,
    minWidth: (props: CircularProgressBarProps) => props.width,
    position: 'relative',
  },
  children: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
