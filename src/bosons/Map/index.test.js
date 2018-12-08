import React from 'react';
import Map from './index';
import KudooThemeProvider, { theme } from 'components/config/theme';
import renderer from 'react-test-renderer';

it('renders default Map', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <Map />
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
