import React, { Component } from 'react';
import Model from './Model/examples/Model';

class EarthModel extends Component {
  render() {
    return (
      <div className="content">
        <Model />
      </div>
    );
  }
}

export default EarthModel;

// var __html = require('./Model/examples/CustomPlacemark.html');
// var template = { __html: __html };

// React.module.exports = React.createClass({
//   render: function() {
//     return(
//       <div dangerouslySetInnerHTML={template} />
//     );
//   }
// });
