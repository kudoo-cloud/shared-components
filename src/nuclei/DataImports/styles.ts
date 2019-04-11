export default theme => ({
  draftButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  prevNextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prevNextButton: {
    width: 230,
    margin: '0px 10px',
  },
  mainDiv: {
    height: 'calc(100vh - 340px)',
    overflowY: 'auto',
  },

  //File Upload
  attachmentWrapper: {
    marginTop: 15,
  },
  attachedFilesBlock: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  attachmentBlock: {
    border: `2px dashed ${theme.palette.primary.color2}`,
    borderRadius: 5,
  },
  dragAreaWrapper: {
    width: 'auto',
    height: 'auto',
    border: '0px',
    cursor: 'pointer',
  },
  activeDragArea: {
    backgroundColor: theme.palette.grey['100'],
  },
  dragText: {
    fontFamily: theme.typography.font.family2,
    fontSize: 17,
    fontWeight: '500',
    color: theme.palette.primary.color2,
    padding: '20px 10px',
    textAlign: 'center',
  },
});
