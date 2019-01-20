/* @flow */
import * as React from 'react';
import cx from 'classnames';
import idx from 'idx';
import type { SearchInputProps } from './types';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TextField from 'components/bosons/TextField';
import styles from './styles';

type State = {};

class SearchInput extends React.Component<SearchInputProps, State> {
  static propTypes = {
    ...TextField.propTypes,
    items: PropTypes.arrayOf(PropTypes.any),
    onSearch: PropTypes.func,
    onInputChange: PropTypes.func,
    onItemClick: PropTypes.func,
    searchLoading: PropTypes.bool,
    showSearchIcon: PropTypes.bool,
    defaultInputValue: PropTypes.string,
    renderItem: PropTypes.func,
    labelKey: PropTypes.string,
  };

  static defaultProps = {
    items: [],
    showSearchIcon: true,
    onSearch: () => {},
    onInputChange: () => {},
    onItemClick: () => {},
    defaultInputValue: '',
    labelKey: 'label',
  };

  _handleStateReducer = (state, changes) => {
    switch (changes.type) {
      // Downshift by default reset the input value on blur when there is no item selected
      // we dont want to reset that value
      case Downshift.stateChangeTypes.mouseUp:
      case Downshift.stateChangeTypes.blurInput: {
        return {
          ...changes,
          inputValue: state.inputValue,
        };
      }
      default:
        return changes;
    }
  };

  _renderItem = ({ getItemProps, item, index, selectedItem }) => {
    const { classes, renderItem, labelKey } = this.props;
    return (
      <div
        {...getItemProps({ item: item })}
        key={`${item[labelKey]}-${index}`}
        className={cx(classes.searchItem, {
          isSelected: selectedItem === item,
        })}>
        {renderItem ? renderItem(item) : item[labelKey]}
      </div>
    );
  };

  render() {
    const {
      classes,
      onSearch,
      onItemClick,
      searchLoading,
      items = [],
      showSearchIcon,
      defaultInputValue,
      renderItem, // eslint-disable-line
      labelKey,
      showClearIcon,
      onInputChange,
      ...rest
    } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.root}>
          <Downshift
            itemToString={i => (i ? i[labelKey] : i)}
            onChange={onItemClick}
            initialInputValue={defaultInputValue}
            stateReducer={this._handleStateReducer}>
            {({
              getInputProps,
              getItemProps,
              isOpen,
              inputValue,
              selectedItem,
              clearSelection,
            }) => {
              return (
                <div style={{ position: 'relative' }}>
                  <div
                    className={cx(
                      classes.component,
                      isOpen && items.length > 0 ? 'is-open' : ''
                    )}>
                    <TextField
                      {...getInputProps({
                        ...rest,
                        value: inputValue || '',
                        showClearIcon: showClearIcon || false,
                        label: '',
                        classes: {
                          textInputWrapper: classes.input,
                        },
                        onChange: event => {
                          const value = idx(event, _ => _.target.value);
                          if (typeof value === 'undefined') {
                            return;
                          }
                          if (value === '' || !value) {
                            clearSelection();
                          }
                          onInputChange(value);
                        },
                      })}
                    />
                    {showSearchIcon && (
                      <div
                        className={cx(classes.icon, {
                          isLoading: searchLoading,
                        })}
                        onClick={() => onSearch(inputValue)}>
                        <i
                          className={cx({
                            'ion-search': !searchLoading,
                            'ion-load-c fa-spin': searchLoading,
                          })}
                        />
                      </div>
                    )}
                  </div>
                  {isOpen &&
                    (items || []).length > 0 && (
                      <div className={classes.searchedItemsWrapper}>
                        {items.map((item, index) =>
                          this._renderItem({
                            item,
                            index,
                            getItemProps,
                            selectedItem,
                          })
                        )}
                      </div>
                    )}
                </div>
              );
            }}
          </Downshift>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(SearchInput);
