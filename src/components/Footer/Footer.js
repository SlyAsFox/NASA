import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <span>©2019 Space App Challenge, Set Your Sights High | SLY_FOXES</span>
    </footer>
  );
};

export default Footer;
