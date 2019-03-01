export default theme => ({
  cardForm: {
    border: '1px solid #e6ebf1',
    marginTop: '30px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    paddingBottom: '40px',
    padding: '15px',
  },
  cardLabel: {
    color: '#6b7c93',
    fontWeight: '300',
    letterSpacing: '0.005em',
    fontSize: '20px',
  },
  cardInput: {
    display: 'block',
    margin: '10px 0 20px 0',
    maxWidth: '500px',
    padding: '10px 14px',
    fontSize: '1em',
    fontFamily: `'Source Code Pro', monospace`,
    boxShadow: 'rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px',
    border: '0',
    outline: '0',
    borderRadius: '4px',
    background: 'white',
    '&::placeholder': {
      color: '#aab7c4'
    },
    '&:focus': {
      boxShadow: 'rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px',
      '-webkit-transition': 'all 150ms ease',
      'transition': 'all 150ms ease'
    }
  },
  cardButton: {
    whiteSpace: 'nowrap',
    border: '0',
    outline: '0',
    display: 'inline-block',
    height: '40px',
    lineHeight: '40px',
    padding: '0 14px',
    boxShadow: '0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)',
    color: '#fff',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    backgroundColor: '#3aa9db;',
    textDecoration: 'none',
    '-webkit-transition': 'all 150ms ease',
    transition: 'all 150ms ease',
    marginTop: '10px',
    '&:hover':{
      color: '#fff',
      cursor: 'pointer',
      transform: 'translateY(-1px)',
      boxShadow: '0 7px 14px rgba(50, 50, 93, .10), 0 3px 6px rgba(0, 0, 0, .08)',
    }
  },
  cardContainer: {
    maxWidth: '550px',
    margin: '0 auto',
    width: 'auto',
    backgroundColor: '#eaeaea'
  }
})
