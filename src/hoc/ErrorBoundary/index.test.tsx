import React from 'react';
import ErrorBoundary from './index';
import KudooThemeProvider, { theme } from 'components/config/theme';
import renderer from 'react-test-renderer';

it('renders default ErrorBoundary', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <ErrorBoundary>
          <div />
        </ErrorBoundary>
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
