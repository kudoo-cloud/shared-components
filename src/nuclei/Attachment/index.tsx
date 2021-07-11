
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import { Trans } from '@lingui/react';

type Props = {};
type State = {
  accepted: Array<any>,
  rejected: Array<any>,
};

class Accept extends Component<Props, State> {
  dropzoneRef: any;

  state = {
    accepted: [],
    rejected: [],
  };

  render() {
    return (
      <ErrorBoundary>
        <section>
          <div className="dropzone">
            <Dropzone
              ref={(node: any) => {
                this.dropzoneRef = node;
              }}
              accept="image/jpeg, image/png"
              onDrop={(accepted, rejected) => {
                this.setState({ accepted, rejected });
              }}>
              <p>
                <Trans>
                  Try dropping some files here, or click to select files to
                  upload.
                </Trans>
              </p>
              <p>
                <Trans>Only *.jpeg and *.png images will be accepted</Trans>
              </p>
            </Dropzone>
          </div>
          <aside>
            <h2>
              <Trans>Accepted files</Trans>
            </h2>
            <ul>
              {this.state.accepted.map(f => (
                <li key={f.name}>
                  {f.name} - {f.size} bytes
                </li>
              ))}
            </ul>
            <h2>
              <Trans>Rejected files</Trans>
            </h2>
            <ul>
              {this.state.rejected.map(f => (
                <li key={f.name}>
                  {f.name} - {f.size} bytes
                </li>
              ))}
            </ul>
          </aside>
          <button
            type="button"
            onClick={() => {
              this.dropzoneRef.open();
            }}>
            <Trans>Open File Dialog</Trans>
          </button>
        </section>
      </ErrorBoundary>
    );
  }
}

export default Accept;
