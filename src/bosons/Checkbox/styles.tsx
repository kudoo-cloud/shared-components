import { Theme } from 'components/config/theme';
import { CheckBoxProps, StyleKeys } from './types';

const width = {
  small: 20,
  medium: 27,
  large: 37,
};

const radius = {
  small: 2,
  medium: 3,
  large: 5,
};

const tickSize = {
  small: 13,
  medium: 20,
  large: 25,
};

export default (theme: Theme): StyleFnReturnType<StyleKeys, CheckBoxProps> => ({
  component: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&.disabled': {
      cursor: 'default',
      pointerEvents: 'none',
    },
  },
  checkbox: {
    width: (props) => width[props.size],
    height: (props) => width[props.size],
    borderRadius: (props) => radius[props.size],
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'white',
    transition: 'all ease-in 0.2s',
    '&.checked': {
      border: '1px solid transparent',
      backgroundColor: (props) => props.color || theme.palette.primary.color2,
    },
  },
  tickIcon: {
    color: 'white',
    fontSize: (props) => tickSize[props.size],
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 10,
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    fontWeight: 300,
    color: theme.palette.grey[500],
  },
  error: {
    marginTop: 5,
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    fontWeight: 300,
    color: theme.palette.secondary.color1,
  },
});
