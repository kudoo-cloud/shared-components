import React from 'react';
import AlertDialog from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders AlertDialog', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <AlertDialog
            visible
            title="Are you sure this project is complete?"
            description="When you mark a project as complete, by default we will send an invoice to your customer for the total or remainder amount owed to you for the services defined. Are you sure you want to mark this project as complete?"
          />
          <AlertDialog
            visible
            title="Are you sure this project is complete?"
            description="When you mark a project as complete, by default we will send an invoice to your customer for the total or remainder amount owed to you for the services defined. Are you sure you want to mark this project as complete?"
            buttons={[
              {
                label: 'Close',
                onClick: () => {},
              },
              {
                label: 'Mark as Complete',
                onClick: () => {
                  alert('Clicked');
                },
                style: {
                  backgroundColor: '#29a9db',
                  color: 'white',
                },
              },
            ]}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
