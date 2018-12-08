export default theme => ({
  component: {
    fontFamily: theme.typography.font.family2,
  },
  wrapper: {},
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: props =>
      props.titleColor === 'darkBlue'
        ? theme.palette.primary.color3
        : props.titleColor === 'green'
          ? theme.palette.primary.color1
          : props.titleColor,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    wordBreak: 'break-word',
    paddingRight: 15,
  },
  editIcon: {
    fontSize: 18,
    color: 'white',
    cursor: 'pointer',
  },
  infoWrapper: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: 20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.blueGrey[50],
  },
  projectStatus: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
    color: theme.palette.blueGrey[50],
  },
  invoiceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  invoiceStatus: {
    fontSize: 16,
    fontWeight: '500',
    color: props =>
      props.invoiceStatusColor === 'orange'
        ? theme.palette.secondary.color1
        : props.invoiceStatusColor === 'green'
          ? theme.palette.primary.color1
          : theme.palette.blueGrey[50],
  },
  invoiceDate: {
    fontSize: 16,
    fontWeight: '300',
    color: theme.palette.blueGrey[50],
  },
});
