/* @flow */

// import type { WeekPeriodProps } from './types';
import type { Theme } from 'components/config/theme';

export default (theme: Theme) => ({
  component: {},
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    padding: '17px 20px',
    cursor: 'pointer',
    border: `1px solid ${theme.palette.grey['300']}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.color2,
      border: `1px solid ${theme.palette.primary.color2}`,
    },
  },
  arrow: {
    '$button:hover &': {
      borderLeftColor: 'white',
    },
  },
  prevButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  nextButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  dateText: {
    padding: '0px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTop: `1px solid ${theme.palette.grey['300']}`,
    borderBottom: `1px solid ${theme.palette.grey['300']}`,
    fontFamily: theme.typography.font.family2,
    fontWeight: '300',
    fontSize: 16,
    justifyContent: 'center',
    minWidth: 200,
    flex: 1,
  },
});
