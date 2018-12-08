import React from 'react';
import Modal from './index';
import { render } from 'enzyme';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

it('renders Modal', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <Modal
            visible
            title="Ready to submit for approval"
            description={
              <div>
                Your timesheet is now finalised. It will now be submitted for
                Approval.
              </div>
            }
            buttons={[
              {
                title: 'Cancel',
								type: 'cancel'
              },
              {
                title: 'Loading',
                loading: true,
                buttonColor: '#29a9db',
              },
              {
                title: 'Submit',
                buttonColor: '#29a9db',
              },
              {
                title: 'Disabled',
                isDisabled: true,
                buttonColor: '#29a9db',
              },
            ]}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
