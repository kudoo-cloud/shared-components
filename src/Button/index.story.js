import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from './index';

storiesOf('Button', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ padding: 10 }}>
      <div style={{ width: 400 }}>
        <label className="label">Default</label>
        <Button title="Submit" />
        <label className="label">Compact Mode</label>
        <Button title="Submit" applyBorderRadius compactMode />
        <label className="label">Without background</label>
        <Button title="Submit" withoutBackground applyBorderRadius />
        <label className="label">Button with borderRadius</label>
        <Button title="Submit" applyBorderRadius />
        <label className="label">Disabled Button</label>
        <Button title="Submit" applyBorderRadius isDisabled />
        <label className="label">Button with After Icon</label>
        <Button
          title="Submit"
          applyBorderRadius
          iconAfter={<i className="fa fa-arrow-right" />}
        />
        <label className="label">Button with Before Icon</label>
        <Button
          title="Add"
          applyBorderRadius
          iconBefore={<i className="fa fa-plus" />}
        />
        <label className="label">Button with Spinner</label>
        <Button
          title="Submitting"
          applyBorderRadius
          iconAfter={<i className="fa fa-pulse fa-spinner" />}
        />
        <label className="label">Button with different color</label>
        <Button title="Submit" applyBorderRadius buttonColor={'#1d99d1'} />
        <label className="label">Button with height & width props</label>
        <Button title="Submit" applyBorderRadius width={500} />
      </div>
    </div>
  ))
);
