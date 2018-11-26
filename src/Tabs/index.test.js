import React from 'react';
import Tabs from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders Tabs', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <div style={{ margin: 10 }}>
            <Tabs
              tabs={[
                { label: 'General' },
                { label: 'User' },
                {
                  label: 'Tab with function',
                  onClick: () => {
                    alert('Tab clicked!!!');
                  },
                },
              ]}
            />
          </div>
          <div style={{ margin: 10 }}>
            <Tabs
              tabs={[
                { label: 'Basic Details' },
                { label: 'Contact Details' },
                { label: 'Location Details' },
              ]}
              tabTheme="tertiary"
            />
          </div>
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
