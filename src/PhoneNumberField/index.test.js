import React from 'react';
import PhoneNumberField from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders PhoneNumberField', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <PhoneNumberField
            areaCodeLabel="Area Code"
            areaCodeValue={'91'}
            phoneNumberLabel={'Mobile Number'}
            phoneNumberValue={'12121212'}
            showClearIcon={false}
            onChangeText={() => {}}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
