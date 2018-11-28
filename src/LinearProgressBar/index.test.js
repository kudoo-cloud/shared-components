import React from 'react';
import LinearProgressBar from './index';
import renderer from 'react-test-renderer';
import KudooThemeProvider, { theme } from '../config/theme';
import { I18nProvider } from 'lingui-react';

import toJson from 'enzyme-to-json';

it('renders LinearProgressBar', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <label className="label">Default</label>
          <LinearProgressBar value={25} />
          <label className="label">With Diff Color</label>
          <LinearProgressBar value={50} filledColor="#29a9db" />
          <label className="label">without showing parts</label>
          <LinearProgressBar
            value={35}
            filledColor="#29a9db"
            showParts={false}
          />
          <label className="label">with label</label>
          <LinearProgressBar value={35} label="Profile" />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
