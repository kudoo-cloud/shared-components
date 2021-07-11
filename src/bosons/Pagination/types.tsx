
import * as React from 'react';

export type PaginationProps = {
  /** currently active page **/
  current: number,
  /** how many items being displayed in one page **/
  pageSize: number,
  /** total item count **/
  total: number,
  /** called when page changes **/
  onPageChange: Function,
  /** active color **/
  activeColor?: string,
  /** classse **/
  classes?: any,
};
