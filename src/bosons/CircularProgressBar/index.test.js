import React from 'react';
import CircularProgressBar from './index';
import renderer from 'react-test-renderer';
import KudooThemeProvider, { theme } from 'components/config/theme';
import { I18nProvider } from 'lingui-react';

import toJson from 'enzyme-to-json';

it('renders CircularProgressBar', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <label className="label">Default</label>
          <CircularProgressBar value={25} />
          <label className="label">With Text</label>
          <CircularProgressBar value={25}>
            <div
              style={{
                color: '#F8B136',
                fontFamily: "'montserrat',sans-serif",
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              25 %
            </div>
            <div
              style={{
                color: '#C4C4C4',
                fontFamily: "'montserrat',sans-serif",
                fontSize: 14,
                marginTop: 5,
              }}>
              complete
            </div>
          </CircularProgressBar>
          <label className="label">Custom Color</label>
          <CircularProgressBar value={30} filledColor="#29a9db" />
          <label className="label">Custom width</label>
          <CircularProgressBar value={30} filledColor="#2bc88f" width={200} />
          <label className="label">Custom Thickness</label>
          <CircularProgressBar
            value={30}
            filledColor="#2bc88f"
            width={200}
            strokeWidth={5}
          />
          <label className="label">Custom lineShape</label>
          <CircularProgressBar
            value={70}
            filledColor="#2bc88f"
            strokeWidth={15}
            lineShape="round"
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
