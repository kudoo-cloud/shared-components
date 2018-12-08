/* @flow */
import * as React from 'react';
import cx from 'classnames';
import type { TabsProps } from './types';
import withStyles from 'components/hoc/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

type State = {
  activeIndex: number,
};

class TabsNavigation extends React.Component<TabsProps, State> {
  static defaultProps = {
    tabTheme: 'secondary',
    onChange: () => {},
    tabs: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex,
    };
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (props.activeIndex !== prevProps.activeIndex) {
      this.setState({
        activeIndex: props.activeIndex,
      });
    }
  }

  changeActiveIndex = index => {
    this.setState({ activeIndex: index });
    if (this.props.onChange) {
      this.props.onChange(index);
    }
  };

  _handleChange = (event, value) => {
    this.setState({ activeIndex: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  _renderTabs() {
    let { tabs, classes, tabTheme } = this.props;
    return (
      <Tabs
        value={this.state.activeIndex}
        onChange={this._handleChange}
        classes={{
          root: cx(classes.tabsWrapper, {
            secondary: tabTheme === 'secondary',
            tertiary: tabTheme === 'tertiary',
          }),
          indicator: cx(classes.tabsIndicator, {
            secondary: tabTheme === 'secondary',
            tertiary: tabTheme === 'tertiary',
          }),
        }}>
        {tabs.map((tab, index) => (
          <Tab
            classes={{
              root: cx(classes.tabWrapper, {
                secondary: tabTheme === 'secondary',
                tertiary: tabTheme === 'tertiary',
              }),
              textColorInherit: cx(classes.textColorInherit, {
                secondary: tabTheme === 'secondary',
                tertiary: tabTheme === 'tertiary',
              }),
              selected: cx(classes.selectedTab, {
                secondary: tabTheme === 'secondary',
                tertiary: tabTheme === 'tertiary',
              }),
              label: cx(classes.label, {
                secondary: tabTheme === 'secondary',
                tertiary: tabTheme === 'tertiary',
              }),
            }}
            data-test={`tab-${tab.label}`}
            label={tab.label}
            key={index}
            onClick={tab.onClick}
          />
        ))}
      </Tabs>
    );
  }

  render() {
    let { classes } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>{this._renderTabs()}</div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(TabsNavigation);
