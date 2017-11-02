import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../logo.svg';
import {Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'; 

import './navbar.css';
import './fixNavTop.js';

class UisNavbar extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect data-toggle="affix">
                <Navbar.Header>
                    <Navbar.Brand className="navbar-brand">
                        <a href="/"><img alt="Home" src={logo}/></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer className="navbar-inverse" to="/link">
                        <NavItem eventKey={2}>Link</NavItem>
                    </LinkContainer>
                    <LinkContainer className="navbar-inverse" to="/who">
                        <NavItem eventKey={3}>Who Am I ?</NavItem>
                    </LinkContainer>
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
                    <LinkContainer className="navbar-inverse right-position" to="/login">
                        <NavItem eventKey={4}>Login</NavItem>
                    </LinkContainer>
                    <LinkContainer className="navbar-inverse right-position" to="/register">
                        <NavItem eventKey={5}>Register</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}

export default UisNavbar;