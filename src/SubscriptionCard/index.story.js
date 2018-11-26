import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Card from './index';
// import './styles.scss';

storiesOf('Subscription Card', module).add(
  'Default',
  withInfo('Default')(() => (
    <div>
      <div style={{ margin: 10, width: 250 }}>
        <Card
          type="Free"
          price={'$20'}
          period={'per month'}
          shortDescription={'This offer is free for 24months'}
        />
      </div>
      <div style={{ margin: 10, width: 250 }}>
        <Card
          type="Open Source"
          highlighted={true}
          price={'Free'}
          period={'per month'}
          shortDescription={'This offer is free for 24months'}
        />
      </div>
    </div>
  ))
);
