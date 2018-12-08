import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Pagination from './index';

storiesOf('Pagination', module).add(
  'Default',
  withInfo('Default')(() => (
    <div>
      <div style={{ margin: 10 }}>
        <Pagination current={10} pageSize={10} total={505} />
      </div>
      <div style={{ margin: 10 }}>
        <Pagination
          activeColor="#29a9db"
          current={3}
          pageSize={5}
          total={100}
        />
      </div>
    </div>
  ))
);
