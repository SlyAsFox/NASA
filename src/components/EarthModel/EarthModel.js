import React, { Component } from 'react';
import ReactGlobe from 'react-globe';
import markers from './Markers'

class EarthModel extends Component {
  render() {
    return (
      <div style={{ padding: '10vh 0', width: '100vw', height: '100vh' }}>
        <ReactGlobe
            globeOptions={{
              // texture:
              //     'https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/globe_dark.jpg',
            }}
            markers={markers}
            // markerOptions={{ renderer: markerRenderer }}
        />
      </div>
    );
  }
}

export default EarthModel;
