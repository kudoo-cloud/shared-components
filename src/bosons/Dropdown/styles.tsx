import { Theme } from 'components/config/theme';
import { DropdownProps, StyleKeys } from './types';

export default (theme: Theme): StyleFnReturnType<StyleKeys, DropdownProps> => ({
  component: {
    fontFamily: theme.typography.font.family2,
    flex: 1,
  },
  root: {
    position: 'relative',
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    '$root.error &': {
      color: theme.palette.secondary.color1,
    },
  },
  select: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    borderRadius: 5,
    padding: 16.5,
    cursor: 'pointer',
    '&.open': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&.disabled': {
      cursor: 'not-allowed',
    },
    '&.is-value-selected': {
      backgroundColor: theme.palette.grey[100],
    },
    '$root.error &': {
      borderColor: theme.palette.secondary.color1,
    },
  },
  placeholder: {
    fontSize: 15,
    fontWeight: 300,
    color: theme.palette.grey[300],
  },
  selectValue: {
    fontSize: 15,
    fontWeight: 300,
    color: theme.palette.grey[600],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  selectMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 9999,
    maxHeight: 200,
    overflow: 'auto',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    border: `1px solid ${theme.palette.grey[300]}`,
    top: 89,
    '&.withoutLabel': {
      top: 52,
    },
  },
  menuItem: {
    backgroundColor: theme.palette.grey[100],
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
    '&:last-child': {
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderBottom: 0,
    },
  },
  menuItemText: {
    color: '#4D5769',
    '&.selected': {
      fontStyle: 'italic',
    },
  },
  circleIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.palette.primary.color1,
  },
  tickIcon: {
    color: theme.palette.primary.color1,
    fontSize: '16px !important',
  },
  arrowDown: {
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: `8px solid ${theme.palette.grey[300]}`,
    borderRadius: 5,
    transition: 'all ease-in 0.2s',
    transform: 'rotate(0deg)',
    '&.up': {
      transform: 'rotate(-180deg)',
    },
    '$root.error &': {
      borderTopColor: theme.palette.secondary.color1,
    },
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 9998,
    width: '100%',
    height: '100%',
  },
  error: {
    fontWeight: 300,
    fontSize: 14,
    color: theme.palette.secondary.color1,
    marginBottom: 10,
    marginTop: 3,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    wordBreak: 'normal',
    wordWrap: 'normal',
    overflow: 'hidden',
  },
});
