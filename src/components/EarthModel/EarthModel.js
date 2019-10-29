import React, { Component } from 'react';
import ReactGlobe from 'react-globe';
import markers from './Markers'
import markers2 from './Markers2'


class EarthModel extends Component {
  render() {

    return (
      <div style={{ padding: '10vh 0', width: '100vw', height: '100vh' }}>
          {
            (this.props.name === 'all')
              ? (<ReactGlobe
                  globeOptions={{}}
                  markers={markers}
                />)
              : (<ReactGlobe login={this.props.name}
                  globeOptions={{}}
                  markers={markers2(this.props.name)}
                  // markerOptions={{ renderer: markerRenderer }}
                />)
          }
      </div>
    );
  }
}

export default EarthModel;
