export default theme => ({
  cardBtnWrapper: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  cardBtn: {
    width: '300px',
    padding: '15px',
    borderRadius: '50px',
    background: '#232f3f',
    color: '#2fc88e',
    fontFamily: 'montserrat',
    fontWeight: '600',
    '&:hover': {
      background: '#232f3f',
      color: '#2fc88e',
    },
  },
  currencyDropdown: {
    width: '300px',
    margin: '0 auto',
  },
  cardBtnText: {
    color: theme.palette.primary.color2,
    '$cardBtn:hover &': {
      color: 'white',
    },
  },
  subscriptionCardGrid: {
    maxWidth: '450px',
    minWidth: '450px',
    width: '100%'
  }
})
