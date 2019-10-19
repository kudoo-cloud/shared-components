export type StyleKeys = 'component';

export type CustomerFormProps = withStylesHOCProps<StyleKeys> & {
  keys?: {
    customer_name: string;
    contact_name: string;
    contact_surname: string;
    abn: string;
    email: string;
  };
  labels?: {
    customer_name: string;
    contact_name: string;
    contact_surname: string;
    abn: string;
    email: string;
  };
};
