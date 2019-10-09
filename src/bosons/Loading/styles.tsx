import { StyleKeys, LoadingProps } from './types';

export default (): StyleFnReturnType<StyleKeys, LoadingProps> => ({
  component: {
    display: 'flex',
    justifyContent: 'center',
  },
});
