const height = 200;
const width = 250;
export default theme => ({
  component: {
    width,
  },
  button: {
    height: height,
    border: '2px dashed',
    borderColor: theme.palette.grey[200],
    padding: '0px 30px',
    borderRadius: 5,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    outline: 'none',
    '&:hover': {
      borderColor: theme.palette.primary.color2,
    },
  },
  buttonIcon: {
    color: props => props.iconColor || theme.palette.primary.color2,
    fontSize: 60,
    marginBottom: 20,
  },
  buttonText: {
    color: props => props.textColor || theme.palette.grey[600],
    fontSize: 16,
    fontFamily: theme.typography.font.family2,
    fontWeight: 500,
  },
});
