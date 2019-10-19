export type StyleKeys = 'component';

export type AddressFormFields = {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postcode?: string;
};

export type AddressFormProps = withStylesHOCProps<StyleKeys> & {
  keys?: AddressFormFields;
  labels?: AddressFormFields;
};
