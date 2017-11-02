import React, { Component } from 'react';
import logo from './logo.svg';
import UisFooter from './components/uis-footer';
import UisRooting from './components/uis-routing';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React PEPASO</h1>
        </header>
        <UisRooting/>
        <UisFooter/>
      </div>
    );
  }
}

export default App;
