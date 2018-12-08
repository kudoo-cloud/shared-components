import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import LinearProgressBar from './index';

storiesOf('LinearProgressBar', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ padding: 10 }}>
      <div style={{ width: 400 }}>
        <label className="label">Default</label>
        <LinearProgressBar value={25} />
        <label className="label">Square</label>
        <LinearProgressBar
          value={25}
          rounded={false}
          showPercentage={false}
          showParts={false}
        />
        <label className="label">Custom Width</label>
        <LinearProgressBar
          value={25}
          rounded={false}
          showPercentage={false}
          showParts={false}
          width={500}
        />
        <label className="label">With Diff Color</label>
        <LinearProgressBar value={50} filledColor="#29a9db" />
        <label className="label">without showing parts</label>
        <LinearProgressBar value={35} filledColor="#29a9db" showParts={false} />
        <label className="label">with label</label>
        <LinearProgressBar value={35} label="Profile" />
        <label className="label">without percentage</label>
        <LinearProgressBar value={35} showPercentage={false} />
      </div>
    </div>
  ))
);
