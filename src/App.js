import React, { Component } from 'react';
import logo from './logo.svg';
import UisNavbar from './components/uis-navbar';
import UisFooter from './components/uis-footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React PEPASO</h1>
        </header>
        <UisNavbar/>
        <body className="body-style">
          <h1>Present</h1>
          <div className="App-paralax"></div>
          <h1>Future</h1>
          <div className="App-paralax2"></div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </body>
        <UisFooter/>
      </div>
    );
  }
}

export default App;
