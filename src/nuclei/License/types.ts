export type TierType = {
  type: string;
  interval: string;
  description: string;
};

export type TierPricingType = {
  pricing: number;
  currency: string;
};

export type LicenseProps = {
  classes?: any;
  currency?: string;
  onCurrencyChange?: Function;
  onTierClick?: Function;
  theme?: any;
  tiers?: Array<TierType>;
  tiersPricing?: Array<TierPricingType>;
  showConvertCurrencyDropdown?: boolean;
  selectedTierIndex?: number;
};

export type LicenseState = {
  selectedCurrency: string;
  isLoading: boolean;
  tiers?: Array<TierType>;
  tiersPricing?: Array<TierPricingType>;
};
