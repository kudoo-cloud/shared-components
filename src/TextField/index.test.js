import React from 'react';
import TextField from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from '../config/theme';
import toJson from 'enzyme-to-json';

it('renders TextField', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <TextField label={'Default'} placeholder={'Enter email'} />
          <TextField
            label={'custom placeholder color'}
            placeholder={'Enter email'}
            placeholderColor={'#1d99d1'}
          />
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
            applyBorderRadius={true}
          />
          <TextField
            label="Password field"
            type="password"
            icon={<i className={'icon icon-password'} />}
            placeholder={'Enter password'}
            applyBorderRadius={true}
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
            applyBorderRadius={true}
            value={'storybook@kudoo.com'}
            error={'Invalid Email'}
          />
          <TextField
            label="Custom Error Color"
            icon={<i className={'icon icon-message'} />}
            placeholder={'Enter email'}
            applyBorderRadius={true}
            value={'storybook@kudoo.com'}
            error={'Invalid Email'}
            errorColor={'red'}
          />
          <TextField
            label="with invalid state but dont show error message"
            icon={<i className={'icon icon-message'} />}
            placeholder={'Enter email'}
            applyBorderRadius={true}
            value={'storybook@kudoo.com'}
            error={'Invalid Email'}
            showErrorMessage={false}
          />
          <div style={{ width: 300 }}>
            <TextField
              label="Custom Width"
              icon={<i className={'icon icon-message'} />}
              placeholder={'Enter email'}
              applyBorderRadius={true}
              value={'storybook@kudoo.com'}
            />
          </div>
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
