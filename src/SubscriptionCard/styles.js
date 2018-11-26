export default theme => ({
  component: {
    minHeight: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  root: {
    fontFamily: theme.typography.font.family2,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '5px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    '&.highlighted': {
      border: `1px solid ${theme.palette.primary.color1}`,
    },
  },
  cardType: {
    backgroundColor: theme.palette.primary.color3,
    padding: 15,
    color: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.highlighted': {
      backgroundColor: theme.palette.primary.color1,
    },
  },
  cardInfoWrapper: {
    padding: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  cardPrice: {
    fontSize: 30,
    color: theme.palette.primary.color3,
    fontWeight: 300,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cardPeriod: {
    color: theme.palette.grey[400],
    fontSize: 15,
    fontWeight: 300,
    textAlign: 'center',
  },
  cardShortDesc: {
    color: theme.palette.primary.color3,
    fontSize: 17,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 30,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&.highlighted': {
      color: theme.palette.primary.color1,
    },
  },
  cardBtn: {
    border: `1px solid ${theme.palette.primary.color2}`,
    cursor: 'pointer',
    transition: 'all ease-in 0.2s',
    backgroundColor: 'transparent',
    marginTop: 15,
    '&:hover': {
      backgroundColor: theme.palette.primary.color2,
    },
  },
  cardBtnText: {
    color: theme.palette.primary.color2,
    '$cardBtn:hover &': {
      color: 'white',
    },
  },
});
