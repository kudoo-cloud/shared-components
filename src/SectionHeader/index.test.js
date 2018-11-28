import React from 'react';
import SectionHeader from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from 'components/Button';
import { Route } from 'react-router';

import KudooThemeProvider, { theme } from '../config/theme';
import { I18nProvider } from 'lingui-react';
import toJson from 'enzyme-to-json';

it('renders SectionHeader', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
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
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
