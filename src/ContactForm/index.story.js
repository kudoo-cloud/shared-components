import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ContactForm from './ContactForm';
import './ContactForm.scss';

storiesOf('Contact Form', module).add(
  'Default',
  withInfo('Sample Contact Form')(() => <ContactForm />)
);
