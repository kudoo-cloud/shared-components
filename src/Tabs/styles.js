/* @flow */
import type { Theme } from 'src/config/theme';
// import type { TabsProps } from './types';

const secondaryTabHeight = 60;
const tertiaryTabHeight = 45;

export default (theme: Theme) => ({
  component: {},
  tabsWrapper: {
    fontFamily: theme.typography.font.family2,
    '&.secondary': {
      height: secondaryTabHeight,
      backgroundColor: theme.palette.grey[100],
    },
    '&.tertiary': {
      height: tertiaryTabHeight,
      backgroundColor: '#FFF',
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      minHeight: tertiaryTabHeight,
    },
  },
  tabsIndicator: {
    '&.secondary': {
      backgroundColor: theme.palette.primary.color1,
      height: 4,
    },
    '&.tertiary': {
      backgroundColor: 'transparent',
      height: 0,
    },
  },
  // secondary theme
  tabWrapper: {
    '&.secondary': {
      height: secondaryTabHeight,
    },
    '&.tertiary': {
      height: tertiaryTabHeight,
    },
  },
  textColorInherit: {
    color: theme.palette.grey[400],
    '&.secondary:hover': {
      backgroundColor: theme.palette.grey[200],
    },
    '&.tertiary:hover': {
      color: theme.palette.grey[500],
    },
  },
  selectedTab: {
    '&.secondary': {
      color: theme.palette.primary.color3,
    },
    '&.secondary:hover': {
      backgroundColor: 'transparent',
    },
    '&.tertiary': {
      color: theme.palette.blueGrey['50'],
    },
    '&.tertiary:hover': {
      color: theme.palette.blueGrey['50'],
    },
  },
  label: {
    '&.secondary': {
      fontFamily: theme.typography.font.family2,
      textTransform: 'initial',
      fontSize: 15,
    },
    '&.tertiary': {
      fontFamily: theme.typography.font.family2,
      textTransform: 'initial',
      fontSize: 15,
    },
  },
});
