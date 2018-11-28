import React from 'react';
import ToggleButton from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from '../config/theme';
import toJson from 'enzyme-to-json';

it('renders ToggleButton', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <ToggleButton
            labels={['Sign In', 'Login']}
            selectedIndex={0}
            onChange={action('on-change')}
          />
          <h4>Custom Width</h4>
          <div style={{ width: 400 }}>
            <ToggleButton
              labels={['Sign In', 'Login']}
              selectedIndex={0}
              onChange={action('on-change')}
            />
          </div>
          <h4>More than 2</h4>
          <ToggleButton
            labels={['First', 'Second', 'Third', 'Forth']}
            onChange={action('on-change')}
            selectedIndex={1}
          />
          <h4>Custom Color</h4>
          <ToggleButton
            labels={['First', 'Second', 'Third']}
            selectedIndex={1}
            activeColor="#2CCFA0"
            onChange={action('on-change')}
          />
          <h4>onChange</h4>
          <ToggleButton
            labels={['First', 'Second', 'Third']}
            selectedIndex={0}
            activeColor="#2CCFA0"
            onChange={action('on-change')}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
