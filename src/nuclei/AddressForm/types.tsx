export type StyleKeys = 'component';

export type AddressFormProps = withStylesHOCProps<StyleKeys> & {
  keys?: {
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  labels?: {
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
};
