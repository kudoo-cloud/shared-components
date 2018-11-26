import React from 'react';
import WizardSteps from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'src/config/theme';
import toJson from 'enzyme-to-json';

it('renders WizardSteps', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10 }}>
          <WizardSteps
            steps={[
              { label: 'Project', active: true, component: <div /> },
              { label: 'Customers', component: <div /> },
              { label: 'Services', component: <div /> },
              { label: 'Rules', component: <div /> },
            ]}
          />
          <br />
          <br />
          <br />
          <WizardSteps
            steps={[
              { label: 'Project', visited: true, component: <div /> },
              { label: 'Customers', active: true, component: <div /> },
              { label: 'Services', component: <div /> },
              { label: 'Rules', component: <div /> },
            ]}
          />
          <br />
          <br />
          <br />
          <WizardSteps
            steps={[
              { label: 'Project', visited: true, component: <div /> },
              { label: 'Customers', visited: true, component: <div /> },
              { label: 'Services', active: true, component: <div /> },
              { label: 'Rules', component: <div /> },
            ]}
          />
          <br />
          <br />
          <br />
          <WizardSteps
            activeColor="#29a9db"
            visitedColor="#e40749"
            steps={[
              { label: 'Project', visited: true, component: <div /> },
              { label: 'Customers', visited: true, component: <div /> },
              { label: 'Services', visited: true, component: <div /> },
              { label: 'Rules', active: true, component: <div /> },
            ]}
          />
          <br />
          <br />
          <br />
          <WizardSteps
            steps={[
              { label: 'First', component: <div /> },
              { label: 'Second', component: <div /> },
              { label: 'Third', component: <div /> },
              { label: 'Fourth', component: <div /> },
              { label: 'Fifth', component: <div /> },
            ]}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
