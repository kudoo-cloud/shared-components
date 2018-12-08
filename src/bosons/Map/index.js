/* @flow */
import React, { Component } from 'react';
import ErrorBoundary from 'components/hoc/ErrorBoundary';

type Props = {};
type State = {};

class Map extends Component<Props, State> {
  map: any;

  componentDidMount() {
    this.map = new google.maps.Map(this.map, {
      center: { lat: -37.8048317, lng: 144.9639135 },
      zoom: 15,
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="map">
          <div
            ref={input => {
              this.map = input;
            }}
            id="map"
            style={{ minHeight: 300 }}
          />
        </div>
      </ErrorBoundary>
    );
  }
}

export default Map;
