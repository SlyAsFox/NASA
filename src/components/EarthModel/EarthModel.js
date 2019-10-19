import React, { Component } from 'react';
import ReactGlobe from 'react-globe';

class EarthModel extends Component {
  render() {
    return (
      <div style={{ width: '50vw', height: '80vh' }}>
        <ReactGlobe />
      </div>
    );
  }
}

export default EarthModel;
