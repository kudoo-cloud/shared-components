import { Theme } from 'components/config/theme';
import { TableProps, StyleKeys } from './types';

export default (theme: Theme): StyleFnReturnType<StyleKeys, TableProps> => ({
  component: {},
  tableRoot: {
    borderCollapse: 'initial',
  },
  tableHeaderCellWrapper: {
    padding: '0px 24px',
  },
  tableHeaderCell: {
    display: 'flex',
    alignItems: 'center',
    height: 55,
  },
  tableHeaderText: {
    fontFamily: theme.typography.font.family2,
    fontSize: 15,
    cursor: 'pointer',
    fontWeight: 500,
    color: theme.palette.grey['400'],
    '&.sorted-column': {
      color: theme.palette.primary.color2,
    },
  },
  sortIconWrapper: {
    marginLeft: 15,
  },
  downArrow: {
    marginTop: -3,
  },
  tableRowRoot: {
    backgroundColor: 'white',
    height: 'auto',
    '&:nth-child(2n)': {
      backgroundColor: (props: TableProps) =>
        props.stripe ? theme.palette.grey[50] : 'white',
    },
  },
  tableCellRoot: {
    borderBottom: `1px solid ${theme.palette.grey['300']}`,
    padding: '0px !important',
    '&:first-child': {
      borderLeft: `1px solid ${theme.palette.grey['300']}`,
    },
    '&:last-child': {
      borderRight: `1px solid ${theme.palette.grey['300']}`,
    },
  },
  closeIconCellRoot: {
    borderLeft: `1px solid ${theme.palette.grey['300']}`,
    padding: '0px 5px',
    minWidth: 40,
    '&:last-child': {
      paddingRight: 5,
    },
  },
  cellValue: {
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    fontWeight: 300,
    color: theme.palette.grey['500'],
  },
  cellValueText: {
    paddingLeft: 24,
    paddingRight: 24,
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
  },
  closeIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.grey['400'],
    fontSize: 20,
    cursor: 'pointer',
    height: 50,
  },
  noDatCell: {
    padding: 15,
    fontSize: 15,
    backgroundColor: theme.palette.grey[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.blueGrey['50'],
    fontFamily: theme.typography.font.family2,
  },
  loadingCell: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hideLoading: {
    display: 'none',
  },
});
