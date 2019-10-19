import { Theme } from 'components/config/theme';
import { FieldLabelProps, StyleKeys } from './types';

export default (
  theme: Theme
): StyleFnReturnType<StyleKeys, FieldLabelProps> => ({
  component: {},
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: theme.typography.font.family2,
  },
  label: {
    fontWeight: 300,
    fontSize: 16,
    color: (props) => props.labelColor || theme.palette.grey[500],
    margin: '10px 0px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    wordBreak: 'normal',
    wordWrap: 'normal',
    overflow: 'hidden',
  },
  linkWithLabel: {
    fontWeight: 300,
    fontSize: 16,
    color: theme.palette.primary.color2,
    cursor: 'pointer',
  },
});
