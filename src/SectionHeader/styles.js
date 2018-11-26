export default theme => ({
  component: {},
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.typography.font.family1,
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.palette.blueGrey[50],
  },
  subtitle: {
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    marginTop: 5,
    fontWeight: 300,
    color: theme.palette.grey[500],
    lineHeight: '25px',
    maxWidth: 800,
  },
});
