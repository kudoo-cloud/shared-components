import { Theme } from 'components/config/theme';
import { ToggleButtonProps, StyleKeys } from './types';

const inActiveColor = '#fff';
export default (
  theme: Theme
): StyleFnReturnType<StyleKeys, ToggleButtonProps> => ({
  component: {
    fontFamily: theme.typography.font.family2,
  },
  root: {
    position: 'relative',
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 300,
    fontSize: 16,
    color: theme.palette.grey['500'],
    margin: '10px 0px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    wordBreak: 'normal',
    wordWrap: 'normal',
    overflow: 'hidden',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  button: {
    padding: '16px 20px',
    border: '1px solid',
    borderRight: '0px solid',
    borderColor: (props) => props.activeColor || theme.palette.primary.color2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    cursor: 'pointer',
    color: (props) => props.activeColor || theme.palette.primary.color2,
    fontFamily: theme.typography.font.family2,
    fontSize: 15,
    fontWeight: 500,
    transition: 'all ease-in 0.2s',
    '&:first-child': {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    '&:last-child': {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      borderRight: '1px solid',
      borderColor: (props) => props.activeColor || theme.palette.primary.color2,
    },
    '&.active': {
      color: inActiveColor,
      cursor: 'default',
    },
  },
  highlighter: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: (props) => `${100 / props.labels.length}%`,
    left: 0,
    backgroundColor: (props) =>
      props.activeColor || theme.palette.primary.color2,
    transition: 'all ease-in 0.3s',
    '&.is-at-first': {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    '&.is-at-last': {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
});
