/* @flow */

import type { Theme } from 'src/config/theme';

export default (theme: Theme) => ({
  component: {},
  message: {
    width: '100%',
    color: theme.palette.secondary.color2,
    textAlign: 'center',
  },
});
