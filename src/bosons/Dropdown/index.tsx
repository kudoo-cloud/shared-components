import * as React from 'react';
import { DropdownProps } from './types';
import withStyles from 'components/hoc/withStyles';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import cx from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import idx from 'idx';
import findIndex from 'lodash/findIndex';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import FieldLabel from 'components/bosons/FieldLabel';
import styles from './styles';

type State = {
  selectedIndex: Array<number> | number;
  isOpen: boolean;
};

class Dropdown extends React.Component<DropdownProps, State> {
  container: any;

  static defaultProps = {
    placeholder: 'Select',
    showErrorMessage: true,
    id: '',
    onChange: () => {},
    onClick: () => {},
    onClose: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
      isOpen: false,
    };
  }

  componentDidMount() {
    if (typeof this.props.value !== 'undefined') {
      this._selectValueFromProps();
    }
    document.addEventListener('mousedown', this._handleOutSideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this._handleOutSideClick, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedIndex !== prevProps.selectedIndex) {
      this.setState({
        selectedIndex: this.props.selectedIndex,
      });
    }
    if (
      !isEqual(this.props.value, prevProps.value) ||
      !isEqual(this.props.items, prevProps.items)
    ) {
      this._selectValueFromProps();
    }
  }

  _selectValueFromProps = () => {
    const { value, items, multiple } = this.props;
    this.selectValue(items, value, multiple);
  };

  _handleOutSideClick = (e: MouseEvent) => {
    if (this.container.contains(e.target)) {
      return;
    }
    // outside click
    this.close();
  };

  open = () => {
    if (this.props.disabled) {
      return;
    }
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  _toggle = (e) => {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  selectValue = (items: any = [], value: any, multiple) => {
    if (typeof value === 'undefined' || value === null) {
      return;
    }
    // if it is singular selection nextSelectedIndex is number and nextSelectedItem object
    // if it is multiple selection nextSelectedIndex is array of index and nextSelectedItem array of items
    let nextSelectedIndex: any;
    let nextSelectedItem: any;
    if (this.props.comparator) {
      let { index, item } = this.props.comparator(
        items.map((item) => item.value),
        value
      );
      if (!multiple) {
        // if single selection, index is number and item is object
        nextSelectedIndex = index;
        nextSelectedItem = item;
      } else {
        // if multiple selection, index should be array of number and item should be array of object
        nextSelectedIndex = [].concat(index);
        nextSelectedItem = [].concat(item);
      }
    } else {
      // if comparator is not given then entire value object will be matched with given items
      if (!multiple) {
        nextSelectedIndex = findIndex(items, { value });
        nextSelectedItem = idx(items, (_) => _[nextSelectedIndex]);
      } else {
        nextSelectedIndex = [];
        nextSelectedItem = [];
        items.forEach((item, index) => {
          if (value.indexOf(item.value) > -1) {
            nextSelectedIndex.push(index);
            nextSelectedItem.push(item);
          }
        });
      }
    }
    this.setState({ selectedIndex: nextSelectedIndex });
  };

  reset = () => {
    this.setState({ selectedIndex: -1 });
  };

  _handleChange = (item: Object, index: number) => {
    const { onChange, multiple } = this.props;
    let isSelected = true;
    if (!multiple) {
      this.setState({ selectedIndex: index });
    } else {
      const { selectedIndex } = this.state;
      const pos = [].concat(selectedIndex || []).indexOf(index);
      let newSelectedIndex = [];
      if (selectedIndex instanceof Array) {
        newSelectedIndex = [...selectedIndex];
      }
      if (pos > -1) {
        // index already exist so remove it from array
        newSelectedIndex.splice(pos, 1);
        isSelected = false;
      } else {
        // index doesn't exist so add it
        newSelectedIndex.push(index);
      }
      this.setState({ selectedIndex: newSelectedIndex });
    }

    if (onChange) {
      // isSelected is mainly used for multiple selection , whether item is checked or unchecked
      onChange(item, index, isSelected);
    }
    if (!multiple) {
      // if only single selection, then close dropdown on select
      this.close();
    }
  };

  _renderDropdown() {
    const {
      classes,
      label,
      placeholder,
      items,
      disabled,
      error,
      multiple,
      className,
    } = this.props;
    const { isOpen, selectedIndex } = this.state;
    let selectedLabel;
    if (!multiple) {
      selectedLabel = get(items, `${String(selectedIndex)}.label`);
    } else {
      if (selectedIndex instanceof Array) {
        const labels = []
          .concat(selectedIndex || [])
          .map((val) => get(items, val + `.label`));
        selectedLabel = labels.join(', ');
      }
    }
    let selectedIcon;
    if (!multiple) {
      selectedIcon = <div className={cx(classes.circleIcon)} />;
    } else {
      selectedIcon = <i className={cx('fa fa-check', classes.tickIcon)} />;
    }

    return (
      <div className={cx(classes.root, { error: Boolean(error) }, className)}>
        {/* Label */}
        {label && (
          <FieldLabel label={label} classes={{ label: classes.label }} />
        )}
        {/* Select */}
        <div
          className={cx(classes.select, {
            open: isOpen,
            'is-value-selected': Boolean(selectedLabel),
            disabled,
          })}
          onClick={this._toggle}
        >
          {/* placeholder */}
          {Boolean(placeholder) &&
            !selectedLabel && (
              <div className={cx(classes.placeholder)}>{placeholder}</div>
            )}
          {/* label */}
          {Boolean(selectedLabel) && (
            <div className={cx(classes.selectValue)}>{selectedLabel}</div>
          )}
          {/* arrow */}
          <div className={cx(classes.arrowDown, { up: isOpen })} />
        </div>
        {/* Select Menu */}
        <Collapse
          in={this.state.isOpen}
          timeout="auto"
          unmountOnExit
          classes={{
            container: cx(classes.selectMenu, { withoutLabel: !label }),
          }}
        >
          <div data-test-id="select-menu-wrapper">
            {/* menu items */}
            {items.map((item, index) => {
              let isItemSelected: boolean = false;
              if (!multiple) {
                isItemSelected = selectedIndex === index;
              } else {
                isItemSelected = [].concat(selectedIndex).indexOf(index) > -1;
              }
              return (
                <div
                  data-test-id={`item-${index}`}
                  key={index}
                  className={cx(classes.menuItem)}
                  onClick={() => {
                    this._handleChange(item, index);
                  }}
                >
                  {/* menu item label */}
                  <div
                    className={cx(classes.menuItemText, {
                      selected: isItemSelected,
                    })}
                  >
                    {item.label}
                  </div>
                  {/* menu item select indicator */}
                  {isItemSelected && selectedIcon}
                </div>
              );
            })}
          </div>
        </Collapse>
      </div>
    );
  }

  render() {
    const { classes, error, showErrorMessage, id } = this.props;
    return (
      <ErrorBoundary>
        <div
          className={cx(classes.component)}
          id={id}
          ref={(ref) => (this.container = ref)}
        >
          {this._renderDropdown()}
          {Boolean(error) &&
            showErrorMessage && <div className={classes.error}>{error}</div>}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<DropdownProps>(styles)(Dropdown);
