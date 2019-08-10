import { Theme } from 'shared/src/config/theme';
import { StyleKeys } from './types';

const size = 8;

export default (theme: Theme): StyleFnReturnType<StyleKeys> => ({
  component: {},
  arrow: {
    width: 0,
    height: 0,
    borderTop: (props) => `${props.size || size}px solid transparent`,
    borderBottom: (props) => `${props.size || size}px solid transparent`,
    borderLeft: (props) =>
      `${props.size || size}px solid ${props.color ||
        theme.palette.primary.color2}`,
    borderRadius: 5,
    transition: 'all ease-in 0.2s',
    transform: 'rotate(0deg)',
    '&.down': {
      transform: 'rotate(90deg)',
    },
    '&.left': {
      transform: 'rotate(180deg)',
    },
    '&.up': {
      transform: 'rotate(-90deg)',
    },
  },
});
