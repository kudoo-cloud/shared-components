/* @flow */
import * as React from 'react';

export type EmailInputFieldsProps = {
  /** On Email Change **/
  onEmailChange: Function,
  /** showTo field **/
  showTo: boolean,
  /** showCC field **/
  showCC: boolean,
  /** showBCC field **/
  showBCC: boolean,
  /** classes **/
  classes: Object,
};
