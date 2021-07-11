

import type { Theme } from 'components/config/theme';
import type { SearchInputProps } from './types';

export default (theme: Theme) => ({
  root: {
    position: 'relative',
  },
  component: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    borderTopRightRadius: (props: SearchInputProps) =>
      props.showSearchIcon ? 0 : 5,
    borderBottomRightRadius: (props: SearchInputProps) =>
      props.showSearchIcon ? 0 : 5,
    borderRight: (props: SearchInputProps) =>
      props.showSearchIcon ? 0 : undefined,
    '$component.is-open &': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  icon: {
    backgroundColor: theme.palette.primary.color1,
    padding: '0px 25px',
    height: 52,
    color: 'white',
    fontSize: 25,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '$component.is-open &': {
      borderBottomRightRadius: 0,
    },
    '&.isLoading': {
      pointerEvents: 'none',
      cursor: 'default',
    },
  },
  searchedItemsWrapper: {
    border: `1px solid ${theme.palette.grey['300']}`,
    borderTop: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    maxHeight: 200,
    overflowY: 'auto',
    position: 'absolute',
    right: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
  searchItem: {
    padding: 15,
    cursor: 'pointer',
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    color: theme.palette.blueGrey['50'],
    borderBottom: `1px solid ${theme.palette.grey['200']}`,
    '&.isSelected': {
      fontWeight: '500',
      backgroundColor: theme.palette.grey['100'],
      cursor: 'default',
    },
    '&:hover': {
      backgroundColor: theme.palette.grey['100'],
    },
    '&:last-child': {
      borderBottom: 0,
      '&:hover': {
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      },
      '&.isSelected': {
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      },
    },
  },
});
