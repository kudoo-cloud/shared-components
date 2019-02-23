/* @flow */
import { withStylesProps } from 'components/config/types';
export type LicenseProps = {
  align: string,
  lg: number,
  isConvertCurrencyBtnVisible: boolean,
  classes: any,
  currency: string,
  onConvertCurrencyDDChange: Function,
  subscriptionPrice: Array<number>,
  subscriptionRange: Array<number>,
  ...withStyleProps
};

export type LicenseState = {
  isConvertCurrencyDDVisible: boolean,
  selectedCurrency: string
};
