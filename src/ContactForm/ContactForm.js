/* @flow */
import React, { Component } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';

type Props = {};

type State = {
  contactEmail: string,
  contactMessage: string,
  contactName: string,
  demoCompanyName: string,
  demoContactNumber: string,
  demoEmail: string,
  demoName: string,
  demoRole: string,
  demoSurname: string,
  formType: string,
  isLoading: boolean,
  isSubmited: boolean,
};

class ContactForm extends Component<Props, State> {
  state = {
    formType: 'ContactFormOnly',
    contactName: '',
    contactEmail: '',
    contactMessage: '',
    demoEmail: '',
    demoName: '',
    demoSurname: '',
    demoContactNumber: '',
    demoCompanyName: '',
    demoRole: '',
    isLoading: false,
    isSubmited: false,
  };

  onChangeForm(formType: string) {
    this.setState({ formType });
  }

  onChange = (event: any) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmitForm = async () => {
    const {
      contactName,
      contactEmail,
      contactMessage,
      demoName,
      demoSurname,
      demoContactNumber,
      demoCompanyName,
      demoRole,
      formType,
      demoEmail,
    } = this.state;
    let variables = {};
    if (formType === 'ContactFormOnly') {
      variables = {
        email: contactEmail,
        name: contactName,
        message: contactMessage,
        contactNumber: '',
        role: '',
        companyName: '',
      };
    } else {
      variables = {
        email: demoEmail,
        name: `${demoName} ${demoSurname}`,
        message: '',
        contactNumber: demoContactNumber,
        role: demoRole,
        companyName: demoCompanyName,
      };
    }
    if (variables.email === '') {
      return;
    }
    if (mixpanel) {
      mixpanel.track('Contact', { ...variables });
    }
    this.setState({ isLoading: true });
    try {
      // await this.props.createGetInTouch({ variables });
      this.setState({ isLoading: false, isSubmited: true });
    } catch (error) {
      this.setState({ isLoading: false, isSubmited: false });
    }
  };

  render() {
    const {
      formType,
      contactName,
      contactEmail,
      contactMessage,
      demoName,
      demoSurname,
      demoContactNumber,
      demoCompanyName,
      demoRole,
      demoEmail,
      isLoading,
      isSubmited,
    } = this.state;
    return (
      <ErrorBoundary>
        <div className="contact_form">
          <div className="contact_tabs">
            <ul className="clearfix">
              <li className={formType === 'ContactFormOnly' ? 'active' : ''}>
                <a
                  className="contact-msg"
                  href="javascript:void(0);"
                  onClick={() => this.onChangeForm('ContactFormOnly')}>
                  Send us a message
                </a>
              </li>
              <li className={formType === 'DemoFormOnly' ? 'active' : ''}>
                <a
                  className="demo-message"
                  href="javascript:void(0);"
                  onClick={() => this.onChangeForm('DemoFormOnly')}>
                  Request a demo
                </a>
              </li>
            </ul>
          </div>

          {formType === 'ContactFormOnly' ? (
            <div id="ContactFormOnly">
              <div className="cols2 clearfix">
                <div className="cols">
                  <input
                    type="text"
                    className="form-control"
                    id="contactName"
                    onChange={this.onChange}
                    value={contactName}
                    placeholder={`Name`}
                  />
                </div>
                <div className="cols">
                  <input
                    type="email"
                    id="contactEmail"
                    className="form-control"
                    onChange={this.onChange}
                    value={contactEmail}
                    placeholder={`Email`}
                  />
                </div>
              </div>
              <div className="cols_full">
                <textarea
                  className="form-control"
                  id="contactMessage"
                  onChange={this.onChange}
                  value={contactMessage}
                  placeholder={`Message`}
                />
                <a className="btn send_btn" onClick={this.onSubmitForm}>
                  Send
                </a>
                {isLoading && (
                  <img
                    className="loading"
                    src={require('images/loading.gif')}
                  />
                )}
                <div className="response-result">
                  {isSubmited && (
                    <p>
                      Good Job! We have got your request. We will contact you
                      soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div id="DemoFormOnly">
              <div className="cols2 clearfix">
                <div className="cols">
                  <input
                    type="text"
                    onChange={this.onChange}
                    className="form-control"
                    id="demoName"
                    value={demoName}
                    placeholder={`Name`}
                  />
                </div>
                <div className="cols">
                  <input
                    type="text"
                    id="demoSurname"
                    className="form-control"
                    onChange={this.onChange}
                    value={demoSurname}
                    placeholder={`Surname`}
                  />
                </div>
              </div>
              <div className="cols2 clearfix">
                <div className="cols">
                  <input
                    type="text"
                    className="form-control"
                    id="demoContactNumber"
                    onChange={this.onChange}
                    value={demoContactNumber}
                    placeholder={`Contact Number`}
                  />
                </div>
                <div className="cols">
                  <input
                    type="text"
                    id="demoEmail"
                    className="form-control"
                    onChange={this.onChange}
                    value={demoEmail}
                    placeholder={`Email`}
                  />
                </div>
              </div>
              <div className="cols2 clearfix">
                <div className="cols">
                  <input
                    type="text"
                    className="form-control"
                    id="demoCompanyName"
                    onChange={this.onChange}
                    value={demoCompanyName}
                    placeholder={`Company Name`}
                  />
                </div>
                <div className="cols">
                  <input
                    type="text"
                    id="demoRole"
                    onChange={this.onChange}
                    className="form-control"
                    value={demoRole}
                    placeholder={`Role`}
                  />
                </div>
              </div>

              <div className="cols_full">
                <a className="btn send_btn" onClick={this.onSubmitForm}>
                  Send
                </a>
                {isLoading && (
                  <img
                    className="loading"
                    src={require('images/loading.gif')}
                  />
                )}
                <div className="response-result">
                  {isSubmited && (
                    <p>
                      Good Job! We have got your request. We will contact you
                      soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default ContactForm;
