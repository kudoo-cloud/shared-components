import { Theme } from 'components/config/theme';
import { PatientFormProps, StyleKeys } from './types';

export default (
  theme: Theme
): StyleFnReturnType<StyleKeys, PatientFormProps> => ({
  component: {},
  addressLabel: {
    fontWeight: 'bold',
  },
});
