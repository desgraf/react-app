import React, { Component } from 'react';
import UisFooter from './components/uis-footer';
import UisRooting from './components/uis-routing';
import UisWhoAmI from './components/uis-whoami';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="App">
        <UisRooting/>
        <UisWhoAmI/>
        <UisFooter/>
      </div>
    );
  }
}

export default App;
