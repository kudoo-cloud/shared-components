import { ReactNode } from 'react';
import { ScrollObserverProps } from 'components/hoc/ScrollObserver/types';

export type StyleKeys =
  | 'component'
  | 'tableRoot'
  | 'tableHeaderCellWrapper'
  | 'tableHeaderCell'
  | 'tableHeaderText'
  | 'sortIconWrapper'
  | 'downArrow'
  | 'tableRowRoot'
  | 'tableCellRoot'
  | 'closeIconCellRoot'
  | 'cellValue'
  | 'cellValueText'
  | 'closeIcon'
  | 'noDatCell'
  | 'loadingCell'
  | 'hideLoading';

export type ColumnType = {
  id: string;
  label: string;
  sorted?: boolean;
  notSortable?: boolean;
  order?: 'asc' | 'desc';
  classes?: any;
  renderCell?: Function;
  renderHeader?: Function;
  default?: ReactNode;
};

export type RowData = { [K in keyof ColumnType]: ColumnType[K] };

export type TableProps = withStylesHOCProps<StyleKeys> &
  ScrollObserverProps & {
    /** column Data, based on this data/header will be displayed  **/
    columnData: Array<ColumnType>;
    /** table data, based on this data/rows will be displayed  **/
    data: Array<RowData>;
    /** on row press **/
    onRowClick?: Function;
    /** on cell press **/
    onCellClick: Function;
    /** table data is sortable or not  **/
    sortable?: boolean;
    /** whether to show alternative stripe or not , default : true  **/
    stripe?: boolean;
    /** will be called when user request to sort **/
    onRequestSort?: Function;
    /** whether to show remove icon in last column, by default : true **/
    showRemoveIcon?: boolean;
    /** will be called when user click on remove icon **/
    onRemoveClicked?: Function;
    /** whether to show add icon in column, by default : false **/
    showAddIcon?: boolean;
    /** will be called when user click on add icon **/
    onAddClicked?: Function;
    /** cell style, this function will be used to set specific styling to cell text **/
    cellStyler?: Function;
    /** custom cell renderer, this function is used to render custom cell **/
    cellRenderer?: Function;
    /** loading data */
    loading?: boolean;
  };
