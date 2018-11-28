/* @flow */

import type { Theme } from '../config/theme';
// import type { JumbotronProps } from './types';

export default (theme: Theme) => ({
  component: {
    position: 'relative',
    height: 300,
    background: 'rgba(67, 71, 86, .9)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  title: {
    fontSize: 35,
    fontFamily: theme.typography.font.family2,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 17,
    fontFamily: theme.typography.font.family2,
    fontWeight: '500',
    color: 'white',
    marginBottom: 15,
    marginTop: 15,
  },
  footerText: {
    fontSize: 15,
    fontFamily: theme.typography.font.family2,
    fontWeight: '300',
    color: 'white',
    marginTop: 10,
  },
});
