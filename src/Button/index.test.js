import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';
import KudooThemeProvider, { theme } from 'src/config/theme';
import { I18nProvider } from 'lingui-react';

import toJson from 'enzyme-to-json';

it('renders Button', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div>
          <label className="label">Default</label>
          <Button title="Submit" />
          <label className="label">Button with borderRadius</label>
          <Button title="Submit" borderRadius="10px" />
          <label className="label">Button with height & width props</label>
          <Button title="Submit" borderRadius="100px" height={50} width={400} />
          <label className="label">Disabled Button</label>
          <Button title="Submit" borderRadius="10px" isDisabled />
          <label className="label">Button with After Icon</label>
          <Button
            title="Submit"
            borderRadius="10px"
            iconAfter={<i className="fa fa-arrow-right" />}
          />
          <label className="label">Button with Before Icon</label>
          <Button
            title="Add"
            borderRadius="10px"
            iconBefore={<i className="fa fa-plus" />}
          />
          <label className="label">Button with Spinner</label>
          <Button
            title="Submitting"
            borderRadius="10px"
            iconAfter={<i className="fa fa-pulse fa-spinner" />}
          />
          <label className="label">Button with different color</label>
          <Button title="Submit" borderRadius="10px" buttonColor={'#1d99d1'} />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
