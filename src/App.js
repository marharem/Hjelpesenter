import React, { Component } from 'react';
import logo from './1583.png';
import Searchbar from './component/searchbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
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
