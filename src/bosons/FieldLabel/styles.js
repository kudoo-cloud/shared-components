/** @flow **/

import type { Theme } from 'components/config/theme';
import type { FieldLabelProps } from './types';

export default (theme: Theme) => ({
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
    color: (props: FieldLabelProps) =>
      props.labelColor || theme.palette.grey[500],
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
