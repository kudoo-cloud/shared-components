import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SectionHeader from './index';
import Button from 'components/Button';

storiesOf('SectionHeader', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <SectionHeader
        title="Create New Project"
        subtitle="A project allows you to manage your customers and billing payments."
      />
      <br />
      <br />
      <SectionHeader
        title="Create New Project"
        subtitle="A project allows you to manage your customers and billing payments."
        renderLeftPart={() => (
          <Button
            title="Create New Project"
            borderRadius="25px"
            width={260}
            height={50}
            buttonColor={'#29A9DB'}
          />
        )}
      />
      <br />
      <br />
      <SectionHeader
        title="Customers"
        subtitle="Add or Create a customer using form below"
        renderLeftPart={() => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: 10 }}>
              <Button
                title="Prev"
                buttonColor={'#29A9DB'}
                width={162}
                borderRadius="25px"
              />
            </div>
            <div>
              <Button
                title="Next"
                buttonColor={'#29A9DB'}
                width={162}
                borderRadius="25px"
              />
            </div>
          </div>
        )}
      />
    </div>
  ))
);
