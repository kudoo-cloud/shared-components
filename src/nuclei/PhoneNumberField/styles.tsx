import { Theme } from 'components/config/theme';
import { PhoneNumberFieldProps, StyleKeys } from './types';

export default (
  theme: Theme
): StyleFnReturnType<StyleKeys, PhoneNumberFieldProps> => ({
  component: {
    display: 'flex',
  },
  plusIcon: {
    color: theme.palette.grey['700'],
    fontSize: 30,
    position: 'relative',
    left: 5,
  },
  areaCode: {
    width: 100,
    marginRight: 20,
  },
  phoneNumber: {
    flex: 1,
  },
});
