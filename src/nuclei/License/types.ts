export type LicenseProps = {
  isConvertCurrencyBtnVisible: boolean,
  classes: any,
  currency: string,
  onConvertCurrencyDDChange: Function,
  isWebsite: boolean,
  subscriptionPrice: Array<number>,
  subscriptionRange: number,
  theme: any,
  isVizierRepo: boolean,
};

export type LicenseState = {
  isConvertCurrencyDDVisible: boolean,
  selectedCurrency: string,
  calculatedSubscriptionPrice: Array<number>,
  calculatedSubscriptionRange: number,
  lg: number,
  isLoading: boolean,
  component: any,
};
