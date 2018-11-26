import React from 'react';
import TriangleArrow from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders TriangleArrow', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <TriangleArrow />
          <h4>down</h4>
          <TriangleArrow direction="down" />
          <h4>left</h4>
          <TriangleArrow direction="left" />
          <h4>up</h4>
          <TriangleArrow direction="up" />
          <h4>custom color</h4>
          <TriangleArrow color="red" />
          <h4>custom size</h4>
          <TriangleArrow size={15} />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
