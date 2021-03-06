import React from 'react';
import ContactForm from '.';
import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import renderer from 'react-test-renderer';

it('renders default ContactForm', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <I18nProvider>
          <ContactForm />
        </I18nProvider>
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
