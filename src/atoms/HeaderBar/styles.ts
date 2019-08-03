import { Theme } from 'components/config/theme';
import { HeaderBarProps } from './types';

const height = 70;

export default (theme: Theme) => ({
  component: {
    height: (props: HeaderBarProps) => props.height || height,
    backgroundColor: theme.palette.grey['200'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  headerLeft: {
    padding: 20,
  },
  headerLabel: {
    fontSize: 24,
    fontFamily: theme.typography.font.family1,
    color: theme.palette.primary.color3,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
  smallBtn: {
    padding: '0px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.color3,
    height: height,
    cursor: 'pointer',
    borderRight: `1px solid ${theme.palette.blueGrey['50']}`,
    '&:hover': {
      backgroundColor: theme.palette.shadow.color3,
    },
    '&.active': {
      backgroundColor: theme.palette.shadow.color3,
    },
  },
  smallBtnIcon: {
    fontSize: 30,
    color: theme.palette.primary.color1,
  },
  userBtn: {
    justifyContent: 'space-between',
  },
  userName: {
    marginRight: 25,
    fontSize: 16,
    color: 'white',
    fontFamily: theme.typography.font.family2,
  },
  userMenuOverlay: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
    zIndex: 9000,
  },
  userMenu: {
    position: 'absolute',
    top: height,
    right: 0,
    zIndex: 9001,
  },
  userMenuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 20px',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.color3,
    '&:hover': {
      backgroundColor: theme.palette.shadow.color3,
    },
    borderTop: `1px solid ${theme.palette.blueGrey['50']}`,
  },
  userMenuItemLabel: {
    marginRight: 40,
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    fontWeight: 300,
    color: 'white',
  },
  userMenuItemIcon: {
    color: theme.palette.primary.color1,
    fontSize: 20,
  },
});
