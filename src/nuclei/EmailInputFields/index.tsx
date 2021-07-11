
import * as React from 'react';
import { EmailInputFieldsProps } from './types';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import { Formik } from 'formik';
import isEmpty from 'lodash/isEmpty';
import * as Yup from 'yup';
import ButtonBase from '@material-ui/core/ButtonBase';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TextField from 'components/bosons/TextField';
import Button from 'components/bosons/Button';
import FieldLabel from 'components/bosons/FieldLabel';
import styles from './styles';

type State = {};

class EmailInputFields extends React.Component<EmailInputFieldsProps, State> {
  static propTypes = {
    classes: PropTypes.object, // will come from withStyles HOC
    onEmailChange: PropTypes.func,
    showTo: PropTypes.bool,
    showBCC: PropTypes.bool,
    showCC: PropTypes.bool,
  };

  static defaultProps = {
    onEmailChange: () => {},
    showTo: true,
    showCC: true,
    showBCC: true,
  };

  _renderToField() {
    return (
      <EmailInputField
        label="To"
        onEmailChange={emails => {
          this.props.onEmailChange({ to: emails });
        }}
      />
    );
  }

  _renderCCField() {
    return (
      <EmailInputField
        label="CC"
        onEmailChange={emails => {
          this.props.onEmailChange({ cc: emails });
        }}
      />
    );
  }

  _renderBCCField() {
    return (
      <EmailInputField
        label="BCC"
        onEmailChange={emails => {
          this.props.onEmailChange({ bcc: emails });
        }}
      />
    );
  }

  render() {
    const { classes, showTo, showCC, showBCC } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          {showTo && this._renderToField()}
          {showCC && this._renderCCField()}
          {showBCC && this._renderBCCField()}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<EmailInputFieldsProps>(styles)(EmailInputFields);

type EmailInputFieldState = {
  emails: {
    [key: string]: { name: string; email: string };
  };
};

type EmailInputFieldProps = EmailInputFieldsProps & { label: string };

class BaseEmailInputField extends React.Component<
  EmailInputFieldProps,
  EmailInputFieldState
> {
  addEmailForm: any;

  static propTypes = {
    classes: PropTypes.object, // will come from withStyles HOC
    onEmailChange: PropTypes.func,
    label: PropTypes.string,
  };

  state = {
    emails: {},
  };

  _onAddEmail = values => {
    const { emails } = this.state;
    this.setState(
      {
        emails: {
          ...emails,
          [values.email]: {
            name: values.name,
            email: values.email,
          },
        },
      },
      () => {
        this.addEmailForm.resetForm({ name: '', email: '' });
        this.props.onEmailChange(Object.values(this.state.emails));
      },
    );
  };

  _onRemoveEmail = ({ name, email }) => {
    const { emails } = this.state;
    let newEmails = emails;
    delete newEmails[email];
    this.setState({ emails: newEmails }, () => {
      this.props.onEmailChange(Object.values(this.state.emails));
    });
  };

  render() {
    const { classes, label } = this.props;
    const { emails } = this.state;

    return (
      <div className={classes.emailInputField}>
        <FieldLabel label={label} />
        {!isEmpty(emails) && (
          <div className={classes.listEmails}>
            {Object.values(emails).map((email: any, index) => (
              <div className={classes.addedEmailWrapper} key={index}>
                <Tooltip
                  title={email.email}
                  interactive
                  animation="fade"
                  position="top"
                  arrow
                  // arrowType={"round"}
                  trigger={"mouseenter focus" as any}
                >
                  <div className={classes.addedEmail}>{email.name}</div>
                </Tooltip>
                <ButtonBase
                  classes={{ root: classes.removeEmailIcon }}
                  onClick={() => {
                    this._onRemoveEmail(email);
                  }}
                >
                  <i className="fa fa-times" />
                </ButtonBase>
              </div>
            ))}
          </div>
        )}
        <div className={classes.emailInput}>
          <Formik
            innerRef={ref => (this.addEmailForm = ref)}
            initialValues={{ name: '', email: '' }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required('Email is required')
                .email('Email is not valid'),
              name: Yup.string().required('Name is required'),
            })}
            onSubmit={this._onAddEmail}
          >
            {formProps => (
              <form
                className={classes.addEmailForm}
                onSubmit={formProps.handleSubmit}
              >
                <TextField
                  placeholder="Name"
                  classes={{ component: classes.textInput }}
                  value={formProps.values.name}
                  error={formProps.touched.name && formProps.errors.name as string}
                  onChange={formProps.handleChange}
                  onBlur={formProps.handleBlur}
                  name="name"
                />
                <TextField
                  placeholder="Email"
                  classes={{ component: classes.textInput }}
                  value={formProps.values.email}
                  error={formProps.touched.email && formProps.errors.email as string}
                  onChange={formProps.handleChange}
                  onBlur={formProps.handleBlur}
                  name="email"
                />
                <Button
                  title="✓"
                  type="submit"
                  isDisabled={
                    Boolean(formProps.touched.name && formProps.errors.name) ||
                    Boolean(formProps.touched.email && formProps.errors.email)
                  }
                  classes={{ component: classes.addEmailButton }}
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const EmailInputField = withStyles<EmailInputFieldProps>(styles)(BaseEmailInputField);
