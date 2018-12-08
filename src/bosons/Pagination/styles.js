/* @flow */

import type { Theme } from 'components/config/theme';
import type { PaginationProps } from './types';

export default (theme: Theme) => ({
  component: {
    display: 'flex',
    alignItems: 'center',
    '& ul': {
      display: 'flex',
      alignItems: 'center',
    },
    '& li': {
      outline: 'none',
    },
  },
  prevBtn: {
    marginRight: 15,
    padding: '10px 20px !important',
  },
  nextBtn: {
    marginLeft: 15,
    padding: '10px 20px !important',
  },
  pages: {
    display: 'flex',
    alignItems: 'center',
  },
  page: {
    backgroundColor: theme.palette.grey['100'],
    padding: '10px 10px',
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    cursor: 'pointer',
    outline: 'none',
    minWidth: 30,
    '&:hover': {
      backgroundColor: theme.palette.grey['200'],
    },
    '&.active': {
      backgroundColor: (props: PaginationProps) =>
        props.activeColor ? props.activeColor : theme.palette.primary.color1,
      color: 'white',
    },
    '&.disabled': {
      backgroundColor: theme.palette.grey['300'],
      cursor: 'default',
      pointerEvents: 'none',
    },
  },
  numberWrapper: {
    padding: '10px 20px',
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    fontWeight: '500',
    color: theme.palette.grey['400'],
  },
});
