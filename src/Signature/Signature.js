/* @flow */
import React, { Component } from 'react';
import SignaturePad from 'signature_pad';
import ErrorBoundary from 'components/ErrorBoundary';
import { Trans } from '@lingui/react';
import './Signature.scss';
// Heres the code to implement
//TODO we need to refactor a base React button located under ./src/Components/Base/Button that will be used for all Buttons throughout the application

type Props = {};
type State = {};

class Signature extends Component<Props, State> {
  componentDidMount() {
    if (typeof document !== 'undefined') {
      let wrapper: any = document.getElementById('signature-pad');
      if (wrapper) {
        let clearButton = wrapper.querySelector('[data-action=clear]'),
          savePNGButton = wrapper.querySelector('[data-action=save-png]'),
          saveSVGButton = wrapper.querySelector('[data-action=save-svg]'),
          canvas = wrapper.querySelector('canvas');

        // Adjust canvas coordinate space taking into account pixel ratio,
        // to make it look crisp on mobile devices.
        // This also causes canvas to be cleared.
        function resizeCanvas() {
          // When zoomed out to less than 100%, for some very strange reason,
          // some browsers report devicePixelRatio as less than 1
          // and only part of the canvas is cleared then.
          let ratio = Math.max(window.devicePixelRatio || 1, 1);
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext('2d').scale(ratio, ratio);
        }

        window.onresize = resizeCanvas;
        resizeCanvas();

        let signaturePad = new SignaturePad(canvas);

        clearButton.addEventListener('click', function() {
          signaturePad.clear();
        });

        savePNGButton.addEventListener('click', function() {
          if (signaturePad.isEmpty()) {
            //alert('Please provide signature first.');
          } else {
            window.open(signaturePad.toDataURL());
          }
        });

        saveSVGButton.addEventListener('click', function() {
          if (signaturePad.isEmpty()) {
            //alert('Please provide signature first.');
          } else {
            window.open(signaturePad.toDataURL('image/svg+xml'));
          }
        });
      }
    }
  }

  render() {
    return (
      <ErrorBoundary>
        <div>
          <div id="signature-pad" className="m-signature-pad">
            <div className="m-signature-pad--body">
              <canvas />
            </div>
            <div className="m-signature-pad--footer">
              <div className="description">
                <Trans>Sign above</Trans>
              </div>
              <div className="left">
                <button
                  type="button"
                  className="btn clear_btn clear"
                  data-action="clear">
                  <Trans>Clear</Trans>
                </button>
              </div>
              <div className="right">
                <button
                  type="button"
                  className="btn save_btn save"
                  data-action="save-png">
                  <Trans>Save as PNG</Trans>
                </button>
                <button
                  type="button"
                  className="btn save_btn save"
                  data-action="save-svg">
                  <Trans>Save as SVG</Trans>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Signature;
