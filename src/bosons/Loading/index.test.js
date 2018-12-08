import React from 'react';
import Loading from './index';
import KudooThemeProvider, { theme } from 'components/config/theme';
import renderer from 'react-test-renderer';

it('renders Loading', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <div>
          <label>Default</label>
          <Loading />
          <label>Color</label>
          <Loading color={'#f00'} />
          <label>width & height</label>
          <Loading width={60} height={60} />
        </div>
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
