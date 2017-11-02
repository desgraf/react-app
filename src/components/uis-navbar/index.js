import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../logo.svg';
import {Link } from 'react-router-dom';

import './navbar.css';
import './fixNavTop.js';

class UisNavbar extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect data-toggle="affix">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><img src={logo}/></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#"><i className="glyphicon glyphicon-link"></i>Link</NavItem>
                    <NavItem eventKey={2} href="#"><i className="glyphicon glyphicon-link"></i>Link</NavItem>
                    <NavDropdown eventKey={3} title="Language" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Spanish</MenuItem>
                        <MenuItem eventKey={3.2}>English</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Chinese</MenuItem>
                    </NavDropdown>
                </Nav>
                <div>
                    <Link className="navbar navbar-inverse navbar-link" to="/login">Login</Link >
                    <Link className="navbar navbar-inverse navbar-link"to="/register">Register</Link >
                </div>
            </Navbar>
        );
    }
}

export default UisNavbar;