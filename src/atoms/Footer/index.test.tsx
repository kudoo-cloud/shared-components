import React from 'react';
import Footer from './index';
import KudooThemeProvider, { theme } from 'components/config/theme';
import renderer from 'react-test-renderer';

it('renders default Footer', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <Footer />
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
