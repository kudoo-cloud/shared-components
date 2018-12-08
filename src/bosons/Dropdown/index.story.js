import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Dropdown from './index';

storiesOf('Dropdown', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <h4>Default</h4>
      <Dropdown
        label="Gender"
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
      <h4>Selected</h4>
      <Dropdown
        selectedIndex={0}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
      <h4>Multiple Selection</h4>
      <Dropdown
        multiple
        items={[
          { label: 'First', value: 'First' },
          { label: 'Second', value: 'Second' },
          { label: 'Third', value: 'Third' },
          { label: 'Fourth', value: 'Fourth' },
          { label: 'Fifth', value: 'Fifth' },
        ]}
      />
      <h4>Multiple initial Selection using index</h4>
      <Dropdown
        multiple
        selectedIndex={[0, 2]}
        items={[
          { label: 'First', value: 'First' },
          { label: 'Second', value: 'Second' },
          { label: 'Third', value: 'Third' },
          { label: 'Fourth', value: 'Fourth' },
          { label: 'Fifth', value: 'Fifth' },
        ]}
      />
      <h4>Multiple initial Selection using value</h4>
      <Dropdown
        multiple
        value={['First', 'Third']}
        items={[
          { label: 'First', value: 'First' },
          { label: 'Second', value: 'Second' },
          { label: 'Third', value: 'Third' },
          { label: 'Fourth', value: 'Fourth' },
          { label: 'Fifth', value: 'Fifth' },
        ]}
      />
      <h4>Custom Placeholder & without Label</h4>
      <Dropdown
        placeholder={'Select Gender'}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
      <h4>onChange function</h4>
      <Dropdown
        placeholder={'Select Gender'}
        onChange={action('on-change')}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
      <h4>Disabled</h4>
      <Dropdown
        placeholder={'Select Gender'}
        disabled
        selectedIndex={0}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
      <h4>With Error</h4>
      <Dropdown
        placeholder={'Select Gender'}
        disabled
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        error={'Please select your gender'}
      />
    </div>
  ))
);
