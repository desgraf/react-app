import React, { Component } from 'react';
import UisHome from '../uis-home';
import UisRegister from '../uis-register';
import UisNavbar from '../uis-navbar';
import UisWhoAmI from '../uis-whoami';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class UisRouting extends Component {
    render() {
        return (
            <Router>
                <div>
                    <UisNavbar/>
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