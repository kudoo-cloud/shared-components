import React from 'react';
import FieldLabel from './index';
import renderer from 'react-test-renderer';
import KudooThemeProvider, { theme } from 'src/config/theme';
import { I18nProvider } from 'lingui-react';

import toJson from 'enzyme-to-json';

it('renders FieldLabel', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ width: 500 }}>
          <h4>default</h4>
          <FieldLabel label="Email" />
          <h4>custom button color</h4>
          <FieldLabel label="Email" extraLinkWithLabel="Extra Link" />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
