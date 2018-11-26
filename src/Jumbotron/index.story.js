import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { BrowserRouter as Router } from 'react-router-dom';
import Jumbotron from './Jumbotron';

storiesOf('Jumbotron', module)
  .add('Default', withInfo('Default Jumbotron')(() => <Jumbotron />))
  .add(
    'with Options',
    withInfo('Default Jumbotron')(() => (
      <Router>
        <Jumbotron
          href="/features"
          hrefText="View our product"
          title="Where big ideas grow"
          description="Open business systems built to drive innovation"
          footerText="Kudoo will exceed all your expectations"
        />
      </Router>
    ))
  );
