import React from 'react';
import RadioButton from './index';
import { render } from 'enzyme';
import { I18nProvider } from '@lingui/react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

it('renders RadioButton', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <RadioButton label="Text" />
          <h4>Disabled</h4>
          <RadioButton disabled label="Text" />
          <h4>Predefined checked</h4>
          <RadioButton value={true} label="Text" />
          <h4>Custom color</h4>
          <RadioButton value={true} color="green" label="Text" />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
