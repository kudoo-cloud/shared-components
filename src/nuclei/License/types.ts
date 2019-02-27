import { withStylesProps } from 'components/config/types';
export type LicenseProps = {
  isConvertCurrencyBtnVisible: boolean,
  classes: any,
  currency: string,
  onConvertCurrencyDDChange: Function,
  isVizierRepo: boolean,
  isWebsite: boolean,
  subscriptionPrice: Array<number>,
  subscriptionRange: number,
  ...withStyleProps
};

export type LicenseState = {
  isConvertCurrencyDDVisible: boolean,
  selectedCurrency: string,
  calculatedSubscriptionPrice: Array<number>,
  calculatedSubscriptionRange: number,
  align: string,
  lg: number,
  isLoading: boolean
};
