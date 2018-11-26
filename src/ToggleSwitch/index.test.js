import React from 'react';
import ToggleSwitch from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders ToggleSwitch', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <ToggleSwitch />
          <h4>Disabled</h4>
          <ToggleSwitch disabled />
          <h4>Predefined value</h4>
          <ToggleSwitch value={true} />
          <h4>Custom label</h4>
          <ToggleSwitch value={true} onLabel="Yes" offLabel="No" />
          <h4>Custom color</h4>
          <ToggleSwitch
            value={true}
            onLabel="Yes"
            offLabel="No"
            offColor="red"
            onColor="green"
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
