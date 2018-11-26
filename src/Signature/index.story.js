import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Signature from './Signature';
import './Signature.scss';

storiesOf('Signature', module).add(
  'Default',
  withInfo('Default Signature')(() => <Signature />)
);
