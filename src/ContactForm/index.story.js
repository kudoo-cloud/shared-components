import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ContactForm from './ContactForm';

storiesOf('Contact Form', module).add(
  'Default',
  withInfo('Sample Contact Form')(() => <ContactForm />)
);
