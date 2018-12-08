/* @flow */
import * as React from 'react';

export type ColumnFlowType = {
  id: string,
  label: string,
  sorted?: boolean,
  notSortable?: boolean,
  order?: 'asc' | 'desc',
  type?: 'string' | 'date' | 'number',
  classes?: Object,
};

export type TableProps = {
  /** column Data, based on this data/header will be displayed  **/
  columnData: Array<ColumnFlowType>,
  /** table data, based on this data/rows will be displayed  **/
  data: Array<Object>,
  /** on row press **/
  onRowClick?: Function,
  /** on cell press **/
  onCellClick: Function,
  /** table data is sortable or not  **/
  sortable?: boolean,
  /** whether to show alternative stripe or not , default : true  **/
  stripe?: boolean,
  /** will be called when user request to sort **/
  onRequestSort?: Function,
  /** whether to show remove icon in last column, by default : true **/
  showRemoveIcon?: boolean,
  /** will be called when user click on remove icon **/
  onRemoveClicked?: Function,
  /** whether to show add icon in column, by default : false **/
  showAddIcon?: boolean,
  /** will be called when user click on add icon **/
  onAddClicked?: Function,
  /** cell style, this function will be used to set specific styling to cell text **/
  cellStyler?: Function,
  /** custom cell renderer, this function is used to render custom cell **/
  cellRenderer?: Function,
  /** classes **/
  classes: Object,
};
