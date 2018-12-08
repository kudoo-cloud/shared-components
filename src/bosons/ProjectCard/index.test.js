import React from 'react';
import ProjectCard from './index';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';

import { I18nProvider } from 'lingui-react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

it('renders ProjectCard', () => {
  const wrapper = render(
    <I18nProvider language="en" >
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10, width: 350 }}>
          <h4 />
          <ProjectCard
            title="Dev For Google"
            companyName="Google"
            projectStatus="Project Started"
            invoiceStatus="Invoice Sent"
            invoiceStatusColor="green"
            invoiceDate="Today"
          />
          <h4 />
          <ProjectCard
            title="Dev for Petter Potter"
            titleColor="green"
            companyName="Petter Potter"
            projectStatus="Project Started"
            invoiceStatus="Invoice not sent"
            invoiceStatusColor="orange"
            invoiceDate="01/02/2018"
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
