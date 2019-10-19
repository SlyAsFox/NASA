import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
const Header = () => {
  return (
    <section className="header">
      <div className="logo-name">
        <img src={logo} alt="logo" />
      </div>
      <div className="contact">
        <a href="./">contact</a>
      </div>
    </section>
  );
};

export default Header;
