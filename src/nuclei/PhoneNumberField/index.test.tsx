import React from 'react';
import PhoneNumberField from './index';
import { render } from 'enzyme';
import { I18nProvider } from '@lingui/react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

it('renders PhoneNumberField', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <h4>Default</h4>
          <PhoneNumberField
            areaCodeFieldName="areaCode"
            phoneNumberFieldName="phoneNumber"
            areaCodeLabel="Area Code"
            phoneNumberLabel={'Mobile Number'}
            showClearIcon={false}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
