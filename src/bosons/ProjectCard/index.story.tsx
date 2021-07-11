import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ProjectCard from './index';

storiesOf('ProjectCard', module).add(
  'Default',
  withInfo('Default')(() => (
    <div style={{ margin: 10, width: 350 }}>
      <h4 />
      <ProjectCard
        title="Dev For Google"
        daoName="Google"
        projectStatus="Project Started"
        invoiceStatus="Invoice Sent"
        invoiceStatusColor="green"
        invoiceDate="Today"
      />
      <h4 />
      <ProjectCard
        title="Dev for Petter Potter"
        titleColor="green"
        daoName="Petter Potter"
        projectStatus="Project Started"
        invoiceStatus="Invoice not sent"
        invoiceStatusColor="orange"
        invoiceDate="01/02/2018"
      />
    </div>
  ))
);
