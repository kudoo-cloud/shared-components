
import * as React from 'react';
import PropTypes from 'prop-types';
import { TableProps, RowData, ColumnType } from './types';
import get from 'lodash/get';
import cx from 'classnames';
import BaseTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import withStyles from 'components/hoc/withStyles';
import TriangleArrow from 'components/bosons/TriangleArrow';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import Loading from 'components/bosons/Loading';
import ScrollObserver from 'components/hoc/ScrollObserver';
import styles from './styles';

class Table extends React.PureComponent<TableProps, {}> {
  static propTypes = {
    columnData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        sorted: PropTypes.bool,
        default: PropTypes.node,
        order: PropTypes.oneOf(['asc', 'desc']),
        type: PropTypes.oneOf(['string', 'date', 'number']),
        classes: PropTypes.object,
        notSortable: PropTypes.bool,
        renderCell: PropTypes.func,
        renderHeader: PropTypes.func,
      })
    ).isRequired,
    data: PropTypes.array.isRequired,
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    sortable: PropTypes.bool,
    stripe: PropTypes.bool,
    onRequestSort: PropTypes.func,
    showRemoveIcon: PropTypes.bool,
    onRemoveClicked: PropTypes.func,
    showAddIcon: PropTypes.bool,
    onAddClicked: PropTypes.func,
    cellStyler: PropTypes.func,
    cellRenderer: PropTypes.func,
    loading: PropTypes.bool,
    ...ScrollObserver.propTypes,
    classes: PropTypes.object,
  };

  static defaultProps = {
    stripe: true,
    sortable: true,
    columnData: [],
    data: [],
    onRowClick: () => {},
    onCellClick: () => {},
    onRequestSort: () => {},
    onRemoveClicked: () => {},
    showRemoveIcon: true,
    showAddIcon: false,
    onAddClicked: () => {},
    cellStyler: () => '',
    loading: false,
    onBottomReachedThreshold: 200,
    onTopReachedThreshold: 200,
  };

  _onRequestSort = (column: ColumnType) => (event) => {
    const { sortable } = this.props;
    if (!sortable || column.notSortable) {
      return;
    }
    if (this.props.onRequestSort) {
      this.props.onRequestSort(column);
    }
  };

  _onRemoveClicked = (row: RowData) => (event) => {
    if (this.props.onRemoveClicked) {
      this.props.onRemoveClicked(row, event);
    }
  };

  _onAddClicked = (row: RowData) => (event) => {
    if (this.props.onAddClicked) {
      this.props.onAddClicked(row, event);
    }
  };

  _onRowClick = (row: RowData) => (event) => {
    const { onRowClick } = this.props;
    if (onRowClick) {
      onRowClick(event, row);
    }
  };

  _onCellClick = ({ row, column, index }) => (e) => {
    const { onCellClick } = this.props;
    if (onCellClick) {
      onCellClick(e, { row, column, index });
    }
  };

  _renderSortIcon(column: ColumnType) {
    const { classes } = this.props;
    if (!column.sorted) {
      return (
        <div className={classes.sortIconWrapper}>
          <TriangleArrow color={'#B7B7B7'} direction={'up'} size={5} />
          <TriangleArrow
            color={'#B7B7B7'}
            classes={{ component: classes.downArrow }}
            direction={'down'}
            size={5}
          />
        </div>
      );
    }
    return (
      <div className={classes.sortIconWrapper}>
        {column.sorted &&
          column.order === 'asc' && (
            <TriangleArrow color={'#B7B7B7'} direction={'up'} size={5} />
          )}
        {column.sorted &&
          column.order === 'desc' && (
            <TriangleArrow color={'#B7B7B7'} direction={'down'} size={5} />
          )}
      </div>
    );
  }

  _renderColumnHeader(column: ColumnType) {
    const { classes, sortable } = this.props;
    if (typeof column.renderHeader === 'function') {
      return column.renderHeader(column);
    }
    return (
      <>
        <div
          className={cx(classes.tableHeaderText, {
            'sorted-column': column.sorted && sortable,
          })}
        >
          {column.label}
        </div>
        {sortable && !column.notSortable && this._renderSortIcon(column)}
      </>
    );
  }

  _renderHeader() {
    const { columnData, classes, showRemoveIcon, showAddIcon } = this.props;
    return (
      <TableHead>
        <TableRow>
          {columnData.map((column, index) => (
            <TableCell
              key={index}
              className={cx(
                classes.tableHeaderCellWrapper,
                get(column, 'classes.tableHeaderCellWrapper', '')
              )}
            >
              <div
                className={classes.tableHeaderCell}
                onClick={this._onRequestSort(column)}
              >
                {this._renderColumnHeader(column)}
              </div>
            </TableCell>
          ))}
          {showAddIcon && <TableCell padding="checkbox" />}
          {showRemoveIcon && <TableCell padding="checkbox" />}
        </TableRow>
      </TableHead>
    );
  }

  _renderCellData(row: RowData, column: ColumnType) {
    const { classes } = this.props;
    const columnClasses = column.classes || {};
    const cellText =
      row[column.id] !== '' && typeof row[column.id] !== 'undefined'
        ? row[column.id]
        : column.default || '—';
    const cellTextDom = (
      <span className={cx(classes.cellValueText, columnClasses.cellValueText)}>
        {cellText}
      </span>
    );
    if (typeof column.renderCell === 'function') {
      return column.renderCell(row, column);
    } else if (this.props.cellRenderer) {
      return this.props.cellRenderer(row, column, cellTextDom);
    }
    return cellTextDom;
  }

  _renderData() {
    const {
      columnData,
      data,
      classes,
      showRemoveIcon,
      showAddIcon,
      cellStyler,
      loading,
    } = this.props;

    let totalColumns = columnData.length;
    if (showAddIcon) {
      totalColumns++;
    }
    if (showRemoveIcon) {
      totalColumns++;
    }

    return (
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            data-test={`row-${index}`}
            classes={{ root: classes.tableRowRoot }}
            key={index}
            onClick={this._onRowClick(row)}
          >
            {columnData.map((column, index) => {
              const columnClasses = column.classes || {};
              return (
                <TableCell
                  data-test={`cell-${index}`}
                  className={cx(
                    classes.tableCellRoot,
                    columnClasses.tableCellRoot
                  )}
                  onClick={this._onCellClick({ row, column, index })}
                  key={index}
                >
                  <div
                    className={cx(
                      classes.cellValue,
                      columnClasses.cellValue,
                      cellStyler ? cellStyler(row, column) : ''
                    )}
                  >
                    {this._renderCellData(row, column)}
                  </div>
                </TableCell>
              );
            })}
            {showAddIcon && (
              <TableCell
                className={cx(classes.tableCellRoot, classes.closeIconCellRoot)}
                padding="checkbox"
                onClick={this._onAddClicked(row)}
              >
                <div className={classes.closeIcon}>
                  <i className={cx('ion-plus')} />
                </div>
              </TableCell>
            )}
            {showRemoveIcon && (
              <TableCell
                className={cx(classes.tableCellRoot, classes.closeIconCellRoot)}
                padding="checkbox"
                onClick={this._onRemoveClicked(row)}
              >
                <div className={classes.closeIcon}>
                  <i className={cx('icon icon-close')} />
                </div>
              </TableCell>
            )}
          </TableRow>
        ))}
        {data.length === 0 &&
          !loading && (
            <TableRow classes={{ root: classes.tableRowRoot }}>
              <TableCell
                className={classes.tableCellRoot}
                padding="none"
                colSpan={totalColumns}
              >
                <div className={classes.noDatCell}>No data to display</div>
              </TableCell>
            </TableRow>
          )}
        <TableRow
          classes={{
            root: cx(classes.tableRowRoot, !loading ? classes.hideLoading : ''),
          }}
        >
          <TableCell
            className={classes.tableCellRoot}
            padding="none"
            colSpan={totalColumns}
          >
            <div className={classes.loadingCell}>
              <Loading size={30} />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  _renderTable() {
    const { classes } = this.props;
    return (
      <BaseTable className={cx(classes.tableRoot)}>
        {this._renderHeader()}
        {this._renderData()}
      </BaseTable>
    );
  }

  render() {
    let {
      classes,
      onBottomReached,
      onTopReached,
      onBottomReachedThreshold,
      onTopReachedThreshold,
    } = this.props;
    return (
      <ErrorBoundary>
        <ScrollObserver
          onBottomReachedThreshold={onBottomReachedThreshold}
          onBottomReached={onBottomReached}
          onTopReachedThreshold={onTopReachedThreshold}
          onTopReached={onTopReached}
        >
          <div className={classes.component}>{this._renderTable()}</div>
        </ScrollObserver>
      </ErrorBoundary>
    );
  }
}

export default withStyles<TableProps>(styles)(Table);
