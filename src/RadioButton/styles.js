const outerWidth = 37;
const innerWidth = 15;
export default theme => ({
  radioComponent: {
    flex: 1,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    '&.disabled': {
      cursor: 'default',
      pointerEvents: 'none',
    },
  },
  radioOuterCircle: {
    width: outerWidth,
    height: outerWidth,
    borderRadius: 25,
    border: '1px solid #DDDDDD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    transition: 'all ease-in 0.2s',
    '&.selected': {
      backgroundColor: props => props.color || theme.palette.primary.color2,
      border: '1px solid transparent',
    },
  },
  radioInnerCircle: {
    width: innerWidth,
    height: innerWidth,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  radioLabel: {
    marginLeft: 10,
    fontFamily: "'montserrat', sans-serif",
    fontSize: 15,
    fontWeight: '300',
  },
});
