import React, { Component } from 'react';
import UisHome from '../uis-home';
import UisRegister from '../uis-register';
import UisNavbar from '../uis-navbar';
import UisWhoAmI from '../uis-whoami';
import logo from '../../logo.svg';
import './routing.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class UisRouting extends Component {
    render() {
        return (                
            <Router>
                <div>
                    <div id="body-part">
                        <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to Uis WebPage (by React)</h1>
                        </header>
                        <UisNavbar/>
                        <h1 className="under-constr">Dreams under construction</h1>
                    </div>
                    <Switch>
                        <Route exact path="/" component={UisHome}/>
                        <Route path="/register" component={UisRegister}/>
                        <Route path="/who" component={UisWhoAmI}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default UisRouting