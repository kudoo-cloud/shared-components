/* @flow */

import { type Theme } from '../config/theme';
// import { type EmailInputFieldsProps } from './types';

export default (theme: Theme) => ({
  component: {},
  listEmails: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: theme.palette.grey['100'],
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  addedEmailWrapper: {
    margin: 5,
    display: 'flex',
    alignItems: 'center',
  },
  addedEmail: {
    padding: [[0, 10]],
    fontFamily: theme.typography.font.family2,
    color: theme.palette.shadow.color3,
    fontSize: 14,
    backgroundColor: theme.palette.grey['200'],
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  removeEmailIcon: {
    fontSize: 14,
    backgroundColor: theme.palette.grey['300'],
    color: theme.palette.shadow.color3,
    padding: [[0, 10]],
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  emailInput: {
    display: 'flex',
  },
  addEmailForm: {
    display: 'flex',
    width: '100%',
  },
  textInput: {
    marginRight: 10,
  },
  addEmailButton: {
    borderRadius: 5,
    height: '50px',
    width: '50px',
  },
});
