import React from 'react';
import Jumbotron from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import KudooThemeProvider, { theme } from '../config/theme';
import renderer from 'react-test-renderer';

it('renders default Jumbotron', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <Jumbotron />
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Jumbotron with Options', () => {
  const tree = renderer
    .create(
      <KudooThemeProvider theme={theme}>
        <Router>
          <Jumbotron
            href="/features"
            hrefText="View our product"
            title="Where big ideas grow"
            description="Open business systems built to drive innovation"
            footerText="Kudoo will exceed all your expectations"
          />
        </Router>
      </KudooThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
