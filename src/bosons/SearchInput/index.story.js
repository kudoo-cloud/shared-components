import React from 'react';
import 'whatwg-fetch';
import _ from 'lodash';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import SearchInput from './index';

class Search extends React.Component {
  state = {
    loading: false,
    items: [],
    selectedItem: null,
    data: [],
  };

  _fetchRepo = _.debounce(async val => {
    this.setState({ loading: true });
    try {
      let res = await fetch(
        `https://api.github.com/search/repositories?q=${val}`
      );
      let json = await res.json();
      this.setState({
        items: json.items.map(item => ({ label: item.html_url, ...item })),
      });
      this.setState({ data: json.items });
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({ loading: false });
    }
  }, 300);

  _handleItemClick = async item => {
    const selectedItem = _.find(this.state.data, { html_url: item.label });
    this.setState({ selectedItem });
  };

  render() {
    return (
      <div>
        <SearchInput
          placeholder={'Search github repositories'}
          showClearIcon={false}
          onSearch={this._fetchRepo}
          onInputChange={this._fetchRepo}
          onItemClick={this._handleItemClick}
          searchLoading={this.state.loading}
          items={this.state.items}
          labelKey={this.props.labelKey}
          renderItem={this.props.renderItem}
        />
        {this.state.selectedItem && (
          <pre id="content">
            {JSON.stringify(this.state.selectedItem, null, 2)}
          </pre>
        )}
      </div>
    );
  }
}

storiesOf('SearchInput', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <h4>Default</h4>
      <Search />
      <h4>Custom Label key</h4>
      <Search labelKey="full_name" />
      <h4>Custom Render Item</h4>
      <Search
        labelKey="full_name"
        renderItem={item => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                marginRight: 10,
              }}
              src={item.owner.avatar_url}
            />
            <div>{item.full_name}</div>
          </div>
        )}
      />
    </div>
  ))
);
