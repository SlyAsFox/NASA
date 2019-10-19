import React from 'react';

import Header from '../components/Header';
import ModalTitle from '../components/ModalTitle';
import Menu from '../components/Menu';
import Earth from '../components/Earth';
import Sattelite from '../components/Sattelite';
import Footer from '../components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <ModalTitle />

      <Header />
      <div className="main">
        <Menu />
        <Earth />
        <Sattelite />
      </div>
      <Footer />
    </div>
  );
};

export default App;
