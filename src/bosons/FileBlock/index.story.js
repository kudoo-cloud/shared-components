import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FileBlock from './index';

storiesOf('FileBlock', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ padding: 10 }}>
      <div style={{ width: 500 }}>
        <h4>default</h4>
        <FileBlock file={{ name: 'Testing.png' }} />
        <h4>variant: interactive</h4>
        <FileBlock
          file={{
            name: 'Long abc name.png',
            url: 'https://images.unsplash.com/photo-1504511045-dc6e5c9bea25',
          }}
          variant="interactive"
        />
        <h4>variant: link</h4>
        <FileBlock
          file={{
            name: 'nature.png',
            url: 'https://images.unsplash.com/photo-1504511045-dc6e5c9bea25',
          }}
          variant="link"
        />
      </div>
    </div>
  ))
);
