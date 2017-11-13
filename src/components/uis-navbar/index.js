import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../logo.svg';
import { LinkContainer } from 'react-router-bootstrap'; 

import './navbar.css';
import './fixNavTop.js';

class UisNavbar extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect data-toggle="affix">
                <Navbar.Header>
                    <Navbar.Brand className="navbar-inverse">
                        <a href="#app"> Home</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Navbar.Brand className="navbar-inverse">
                            <a href="#whoami"> Who Am I?</a>
                        </Navbar.Brand>
                        <Navbar.Brand className="navbar-inverse">
                            <a href="#slider"> Slider</a>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <a href="#whyhire"> Why Hire Me?</a>
                        </Navbar.Brand>
                        <NavDropdown className="navbar-inverse" eventKey={3} title="Language" id="basic-nav-dropdown">
                            <LinkContainer to="/logout">
                                <MenuItem eventKey={3.1}>Spanish</MenuItem>    
                            </LinkContainer>
                            <LinkContainer to="/logout">
                                <MenuItem eventKey={3.2}>English</MenuItem>    
                            </LinkContainer> 
                            <LinkContainer to="/logout">
                                <MenuItem eventKey={3.3}>Chinese</MenuItem>    
                            </LinkContainer> 
                        </NavDropdown>
                        <LinkContainer className="navbar-inverse" to="/login">
                            <NavItem eventKey={4}>Login</NavItem>
                        </LinkContainer>
                        <LinkContainer className="navbar-inverse" to="/register">
                            <NavItem eventKey={5}>Register</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default UisNavbar;