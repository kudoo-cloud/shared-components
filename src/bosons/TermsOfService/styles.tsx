
import type { Theme } from 'components/config/theme';

export default (theme: Theme) => ({
  component: {
    fontFamily: theme.typography.font.family2,
    lineHeight: '26px',
  },
  '& pre': {
    whiteSpace: 'pre-wrap',
  },
  '& code': {
    whiteSpace: 'pre-wrap',
  },
  '& h1, & h2, & h3': {
    color: theme.palette.shadow.color3,
  },
});
