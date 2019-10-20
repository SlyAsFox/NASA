import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getImages } from '../../redux/actions/imagesAction.js';
import './Satellite.css';
import satellitesData from "../../redux/reducers/satellitesData";

// componentDidMount() {
//   this.props.getProfile();
// }

const Satellite = props => {

  const images = [{name: "rhessi", src:  <img src={require('../../assets/images/rhessi.gif')} alt="loading..." />},
      { name: "ace", src: <img src={require('../../assets/images/ace.jpg')} alt="loading..." />},
      {name: "aim", src: <img src={require('../../assets/images/aim.gif')} alt="loading..." />},
      {name: "cluster" , src:  <img src={require('../../assets/images/cluster.jpg')} alt="loading..." />},
      {name: "cluster2", src:  <img src={require('../../assets/images/cluster2.jpg')} alt="loading..." />},
      {name: "fast", src:  <img src={require('../../assets/images/fast.gif')} alt="loading..." />},
      {name: "geotail", src:  <img src={require('../../assets/images/geotail.jpg')} alt="loading..." />},
      {name: "goes13", src:  <img src={require('../../assets/images/goes13.jpg')} alt="loading..." />},
      {name: "goes14", src:  <img src={require('../../assets/images/goes14.jpg')} alt="loading..." />},
      {name: "goes15", src:  <img src={require('../../assets/images/goes15.jpg')} alt="loading..." />},
      {name: "goes16", src:  <img src={require('../../assets/images/goes16.jpg')} alt="loading..." />},
      {name: "goes17", src:  <img src={require('../../assets/images/goes17.jpg')} alt="loading..." />},
      {name: "image", src:  <img src={require('../../assets/images/image.jpg')} alt="loading..." />},
      {name: "noaa15", src:  <img src={require('../../assets/images/noaa15.jpg')} alt="loading..." />},
      {name: "noaa18", src:  <img src={require('../../assets/images/noaa18.jpg')} alt="loading..." />},
      {name: "noaa19", src:  <img src={require('../../assets/images/noaa19.jpg')} alt="loading..." />},
      {name: "rbspa", src:  <img src={require('../../assets/images/rbspa.jpg')} alt="loading..." />},
      {name: "soho", src:  <img src={require('../../assets/images/soho.png')} alt="loading..." />},
      {name: "stereoa", src:  <img src={require('../../assets/images/stereoa.jpg')} alt="loading..." />},
      {name: "stereob", src:  <img src={require('../../assets/images/stereob.jpg')} alt="loading..." />},
      {name: "timed", src:  <img src={require('../../assets/images/timed.jpg')} alt="loading..." />}];

    console.log(props);

      const src = images.map(image => {
        if (props.name === image.name){return image.src}
      });

  // console.log(src);
  // console.log(props.image);

  return <div className="sattelite">{src}</div>;
};


Satellite.propTypes = {
  // srcImages: PropTypes.string,
};

const mapStateToProps = state => {
  console.log(state.satellitesData);
  return {
    // srcImages: state.imagesReducer.srcImages,
    // srcImages: state.satellitesData.srcImages,
  };
};

const mapDispatchToProps = {
  // getImages,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Satellite);
