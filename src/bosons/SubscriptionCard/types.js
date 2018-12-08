/* @flow */
import * as React from 'react';

export type CardProps = {
  /** subscription plan type **/
  type: string,
  /** subscription plan price **/
  price: string,
  /** subscription plan period **/
  period: string,
  /** subscription plan short description **/
  shortDescription: string,
  /** highlighted subscription plan **/
  highlighted: boolean,
  /** Function **/
  onFindOutClick: Function,
  /** classes **/
  classes: Object,
};
