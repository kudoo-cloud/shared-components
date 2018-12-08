import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TriangleArrow from './index';

storiesOf('TriangleArrow', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10 }}>
      <h4>Default</h4>
      <TriangleArrow />
      <h4>down</h4>
      <TriangleArrow direction="down" />
      <h4>left</h4>
      <TriangleArrow direction="left" />
      <h4>up</h4>
      <TriangleArrow direction="up" />
      <h4>custom color</h4>
      <TriangleArrow color="red" />
      <h4>custom size</h4>
      <TriangleArrow size={15} />
    </div>
  ))
);
