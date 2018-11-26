export default theme => ({
  component: {
    fontFamily: theme.typography.font.family2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
  },
  steps: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 100,
  },
  step: {
    width: props => `${100 / props.steps.length}%`,
  },
  lastStep: {
    width: 'auto !important',
  },
  barWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  stepCircle: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    border: props =>
      `3px solid ${props.activeColor || theme.palette.primary.color1}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '.active &': {
      backgroundColor: props =>
        props.activeColor || theme.palette.primary.color1,
      cursor: 'default',
    },
    '.visited &': {
      backgroundColor: props =>
        props.visitedColor || theme.palette.primary.color3,
      border: props =>
        `3px solid ${props.visitedColor || theme.palette.primary.color3}`,
    },
  },
  stepNumber: {
    fontFamily: theme.typography.font.family1,
    fontSize: 15,
    fontWeight: 'bold',
    color: props => props.activeColor || theme.palette.primary.color1,
    textAlign: 'center',
    '.active &': {
      color: 'white',
    },
    '.visited &': {
      color: 'white',
    },
  },
  stepLabel: {
    position: 'absolute',
    left: '50%',
    marginLeft: -50,
    width: 100,
    bottom: -30,
    fontFamily: theme.typography.font.family1,
    fontSize: 15,
    color: theme.palette.grey[400],
    textAlign: 'center',
    '.active &': {
      color: theme.palette.blueGrey[50],
      fontWeight: 'bold',
    },
  },
  stepBar: {
    height: 4,
    flex: 1,
    backgroundColor: props => props.activeColor || theme.palette.primary.color1,
    '.visited &': {
      backgroundColor: props =>
        props.visitedColor || theme.palette.primary.color3,
    },
  },
});
