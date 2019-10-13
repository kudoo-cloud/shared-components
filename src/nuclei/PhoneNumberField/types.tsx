import { TextFieldProps } from 'components/bosons/TextField/types';

export type StyleKeys = 'component' | 'plusIcon' | 'areaCode' | 'phoneNumber';

export type PhoneNumberFieldProps = TextFieldProps &
  withStylesHOCProps<StyleKeys> & {
    id?: string;
    // Formik Field Name
    areaCodeFieldName: string;
    /** area code label **/
    areaCodeLabel?: string;
    /** area code placeholder **/
    areaCodePlaceholder?: string;
    // Formik Field Name
    phoneNumberFieldName: string;
    /** phone number label **/
    phoneNumberLabel?: string;
    /** phone number placeholder **/
    phoneNumberPlaceholder?: string;
  };
