import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TextField from './index';

storiesOf('TextField', module).add(
  'Default',
  withInfo('Default TextField')(() => (
    <div style={{ padding: 10 }}>
      <TextField label={'Default'} placeholder={'Enter email'} />
      <TextField
        label={'custom placeholder color'}
        placeholder={'Enter email'}
        placeholderColor={'#1d99d1'}
      />
      <TextField label={'Textarea'} multiline placeholder={'Enter Address'} />
      <div style={{ width: 300 }}>
        <TextField
          label="Custom Width"
          icon={<i className={'icon icon-message'} />}
          placeholder={'Enter email'}
          value={'storybook@kudoo.com'}
        />
      </div>
      <div style={{ width: 300 }}>
        <TextField
          label="With Extra Link"
          icon={<i className={'icon icon-message'} />}
          placeholder={'Enter email'}
          value={'storybook@kudoo.com'}
          extraLinkWithLabel="Change"
        />
      </div>
      <TextField
        label={'with Top Border Radius'}
        placeholder={'Enter email'}
        applyTopBorderRadius={true}
      />
      <TextField
        label={'No Border Radius'}
        placeholder={'Enter email'}
        noBorderRadius={true}
      />
      <TextField
        label={'with icon'}
        icon={<i className={'icon icon-message'} />}
        placeholder={'Enter email'}
      />
      <TextField
        label="Password field"
        type="password"
        icon={<i className={'icon icon-password'} />}
        placeholder={'Enter password'}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 110, marginRight: 20 }}>
          <TextField
            label="Area Code"
            icon={<div>+</div>}
            placeholder={''}
            showClearIcon={false}
            value={'91'}
          />
        </div>
        <div style={{ width: 400 }}>
          <TextField label="Mobile" />
        </div>
      </div>
      <TextField
        label="with invalid state"
        icon={<i className={'icon icon-message'} />}
        placeholder={'Enter email'}
        value={'storybook@kudoo.com'}
        error={'Invalid Email'}
      />
      <TextField
        label="Custom Error Color"
        icon={<i className={'icon icon-message'} />}
        placeholder={'Enter email'}
        value={'storybook@kudoo.com'}
        error={'Invalid Email'}
        errorColor={'red'}
      />
      <TextField
        label="with invalid state but dont show error message"
        icon={<i className={'icon icon-message'} />}
        placeholder={'Enter email'}
        value={'storybook@kudoo.com'}
        error={'Invalid Email'}
        showErrorMessage={false}
      />
    </div>
  ))
);
