import React, { Component } from 'react';
import ErrorBoundary from 'components/hoc/ErrorBoundary';

type Props = {};
type State = {
  emailAddress: string;
  isSignUp: boolean;
  isSusScribed: boolean;
  msg: string;
};

class NewsLetterSubScription extends Component<Props, State> {
  state = {
    isSignUp: false,
    isSusScribed: false,
    emailAddress: '',
    msg: 'You have been added to our mailing list',
  };

  subScribe = async () => {
    const { emailAddress } = this.state;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(emailAddress)) {
      const variables = {
        emailAddress: emailAddress,
      };

      // @ts-ignore
      if (mixpanel) {
        // @ts-ignore
        mixpanel.track('Subscribe', { ...variables });
      }
    }
  };

  onChangeEmail = event => {
    this.setState({ emailAddress: event.target.value });
  };

  render() {
    const { isSignUp, isSusScribed, msg } = this.state;
    return (
      <ErrorBoundary>
        <section className="signup_bg">
          <div className="container">
            <div className="signup clearfix">
              <div className="heading">
                <h3>STAY CONNECTED</h3>
              </div>
              <div className="left_signup clearfix">
                <div className="left_thumnail">
                  <img src={require('../../assets/images/mail-icon@3x.png')} />
                </div>
                {!isSignUp ? (
                  <div className="desc">
                    <p>
                      Sign up to the Kudoo newsletter and stay up to date with
                      the latest news and product releases.
                    </p>
                  </div>
                ) : (
                  <div className="desc">
                    {!isSusScribed && (
                      <input
                        type="text"
                        onChange={this.onChangeEmail}
                        className="form-control newslettersubscripe"
                        placeholder="Email ...."
                      />
                    )}
                    {isSusScribed && <p>{msg}</p>}
                  </div>
                )}
              </div>
              <div className="right_signup">
                {!isSignUp ? (
                  <a
                    className="btn signup_btn"
                    onClick={() => this.setState({ isSignUp: true })}
                  >
                    Sign me up
                  </a>
                ) : (
                  !isSusScribed && (
                    <a className="btn signup_btn" onClick={this.subScribe}>
                      Send
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    );
  }
}

export default NewsLetterSubScription;
