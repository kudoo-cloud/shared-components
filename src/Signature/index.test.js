import React from 'react';
import Signature from './index';
import KudooThemeProvider, { theme } from '../config/theme';
import renderer from 'react-test-renderer';

it('renders default Signature', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <Signature />
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
