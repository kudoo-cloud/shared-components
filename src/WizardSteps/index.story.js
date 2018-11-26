import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import WizardSteps from './index';

storiesOf('WizardSteps', module).add(
  'Default',
  withInfo('Default')(() => (
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
  ))
);
