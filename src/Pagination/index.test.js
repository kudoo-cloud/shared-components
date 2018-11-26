import React from 'react';
import Pagination from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders Pagination', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <div style={{ margin: 10 }}>
            <Pagination current={10} pageSize={10} total={505} />
          </div>
          <div style={{ margin: 10 }}>
            <Pagination
              activeColor="#29a9db"
              current={3}
              pageSize={5}
              total={100}
            />
          </div>
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
