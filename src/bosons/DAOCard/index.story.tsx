import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DAOCard from './index';

storiesOf('DAOCard', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10, width: 250 }}>
      <h4>Default</h4>
      <DAOCard primaryLabel="Richard Freelance" secondaryLabel="Owner" />
      <h4>Custom border color </h4>
      <DAOCard
        primaryLabel="Bitesize"
        secondaryLabel="Employee"
        borderColor={'#3C4556'}
        imageUrl={'https://placeimg.com/60/60/nature'}
      />
    </div>
  )),
);
