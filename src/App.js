import React, { Component } from 'react';
import UisFooter from './components/uis-footer';
import UisRooting from './components/uis-routing';
import UisWhoAmI from './components/uis-whoami';
import UisSlider from './components/uis-slider';
import UisHire from './components/uis-hire';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="App">
        <UisRooting/>
        <UisWhoAmI/>
        <UisSlider/>
        <UisHire/>
        <UisFooter/>
      </div>
    );
  }
}

export default App;
