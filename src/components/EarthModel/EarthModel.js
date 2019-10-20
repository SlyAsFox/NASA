import React, { Component } from 'react';
import ReactGlobe from 'react-globe';

class EarthModel extends Component {
  render() {
    return (
      <div style={{ padding: '10vh 0', width: '100vw', height: '100vh' }}>
        <ReactGlobe />
      </div>
    );
  }
}

export default EarthModel;
