import React from 'react';
import CheckBox from './index';
import { render } from 'enzyme';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders CheckBox', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <CheckBox label="Text" />
          <h4>Disabled</h4>
          <CheckBox disabled label="Text" />
          <h4>Predefined checked</h4>
          <CheckBox value={true} label="Text" />
          <h4>Custom color</h4>
          <CheckBox value={true} color="green" label="Text" />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
