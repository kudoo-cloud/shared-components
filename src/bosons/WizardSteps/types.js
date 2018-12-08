/** @flow **/
import * as React from 'react';

export type WizardStepFlowTypes = Array<{|
  visited?: boolean,
  active?: boolean,
  label: string,
  component: React.Node,
|}>;

export type WizardStepsProps = {
  /** steps **/
  steps: WizardStepFlowTypes,
  /** active steps color **/
  activeColor?: string,
  /** visited steps color **/
  visitedColor?: string,
  /** on step click **/
  onStepClick?: Function,
  /** classes **/
  classes: Object,
};
