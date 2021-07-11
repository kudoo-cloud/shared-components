import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ContactForm from '.';

storiesOf('Contact Form', module).add(
  'Default',
  withInfo('Sample Contact Form')(() => <ContactForm />),
);
