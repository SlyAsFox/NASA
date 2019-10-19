import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <span>Satteliter©2019, All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
