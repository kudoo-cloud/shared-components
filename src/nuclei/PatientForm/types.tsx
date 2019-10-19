import { AddressFormFields } from '../AddressForm/types';

export type StyleKeys = 'component' | 'addressLabel';

export const DVACardTypes = [
  { label: 'GOLD', value: 'GOLD' },
  { label: 'WHITE', value: 'WHITE' },
  { label: 'ORANGE', value: 'ORANGE' },
];

export const AboriginalStatus = [
  { label: 'ABORIGINAL NOT TORRES', value: 'ABORIGINAL_NOT_TORRES' },
  { label: 'TORRES NOT ABORIGINAL', value: 'TORRES_NOT_ABORIGINAL' },
  { label: 'BOTH', value: 'BOTH' },
  { label: 'NEITHER', value: 'NEITHER' },
  { label: 'NOT STATED', value: 'NOT_STATED' },
];

export type PatientFields = {
  title?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dob?: string;
  birthAddress?: AddressFormFields;
  address?: AddressFormFields;
  // Australian specific fields
  dvaCardType?: string;
  aboriginalStatus?: string;
  pensionerConcession?: string;
  commonwealthSeniors?: string;
  healthcareConcessions?: string;
  safetyNetConcession?: string;
  medicareNumber?: string;
  DVA?: string;
  oneName?: string;
  noOfBirths?: string;
};

export type PatientFormProps = withStylesHOCProps<StyleKeys> & {
  keys?: PatientFields;
  labels?: PatientFields;
  showAUFields?: boolean;
};
