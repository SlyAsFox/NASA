import React from 'react';

import Header from '../components/Header';
import ModalTitle from '../components/ModalTitle';
import Menu from '../components/Menu';
import Earth from '../components/Earth';
import Satellite from '../components/Sattelite';
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
        <Satellite />
      </div>
      <Footer />
    </div>
  );
};

export default App;
