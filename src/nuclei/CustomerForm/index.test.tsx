import React from 'react';
import CustomerForm from './index';
import { Formik } from 'formik';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';
import { I18nProvider } from '@lingui/react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

it('renders CustomerForm', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10, width: 600 }}>
          <Formik
            initialValues={{
              company_name: '',
              contact_name: '',
              contact_surname: '',
              abn: '',
              email: '',
            }}
            onSubmit={action('onSubmit')}
            render={(formProps) => (
              <form onSubmit={formProps.handleSubmit}>
                <CustomerForm />
              </form>
            )}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
