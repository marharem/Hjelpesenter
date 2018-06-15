import React, { Component } from 'react';
import logo from './img/1583.png';
import Searchbar from './component/searchbar';
import './App.css';
import Cloud from './img/clouds-1188df6.svg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={Cloud} className="background" alt="" />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PasientSky Hjelpesenter</h2>
        </div>
        <p className="App-intro">
                <Searchbar/>

        </p>
      </div>
    );
  }
}

export default App;
