import React,{Component} from 'react';

import Header from '../components/Header';
import ModalTitle from '../components/ModalTitle';
import Menu from '../components/Menu';
import EarthModel from '../components/EarthModel';
import Satellite from '../components/Sattelite';
import Footer from '../components/Footer';

import './App.css';

class App extends Component {

    state= {
        name: ''
    };
    updateData =(value)=>{
        this.setState({name: value});
        console.log(this.state);
    };

    render() {
        return (
            <div className="app">
                <ModalTitle/>

                <Header/>
                <div className="main">
                    <Menu updateData={this.updateData}/>
                    <EarthModel name={this.state.name}/>
                    <Satellite name={this.state.name}/>
                </div>
                <Footer/>
            </div>
        );
    };
}

export default App;
