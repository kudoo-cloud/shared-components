/** @flow **/
import * as React from 'react';

export type WizardStepType = Array<{
  visited?: boolean;
  active?: boolean;
  label: string;
  component: React.ReactNode;
}>;

export type WizardStepsProps = {
  /** steps **/
  steps: WizardStepType;
  /** active steps color **/
  activeColor?: string;
  /** visited steps color **/
  visitedColor?: string;
  /** on step click **/
  onStepClick?: Function;
  /** classes **/
  classes?: any;
};
