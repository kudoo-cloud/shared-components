import React from 'react';
import NotFound from './index';
import './index.scss';
import KudooThemeProvider, { theme } from 'src/config/theme';
import renderer from 'react-test-renderer';

it('renders NotFound Page', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <NotFound />
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
