import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../logo.svg';
import ReactRouter from 'react-router';
import { Route, Router } from 'react-router';
import './navbar.css';

var hasHistory = ReactRouter.hasHistory;

class UisNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><img src={logo}/></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#"><i className="glyphicon glyphicon-link"></i>Link</NavItem>
                    <NavItem eventKey={2} href="#"><i className="glyphicon glyphicon-link"></i>Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Router history={hasHistory}>
                    <Route className="navbar navbar-inverse" path="/register">Register</Route>
                    <Route className="navbar navbar-inverse" path="/login">Login</Route>
                </Router>
            </Navbar>
        );
    }
}

export default UisNavbar;