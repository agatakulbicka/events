import React from 'react'
import {IndexLinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar, NavItem} from 'react-bootstrap'

export default (props) =>

    <Navbar inverse className="App-Menu">
        <Navbar.Header>
            <Navbar.Brand>
                <img src={`/`} alt="Logo" className="responsive" id="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to={`/`}>
                    <NavItem eventKey={0} href="#">Strona główna</NavItem>
                </IndexLinkContainer>

                <IndexLinkContainer to={`/list-events`}>
                    <NavItem eventKey={1} href="#">Wydarzenia</NavItem>
                </IndexLinkContainer>

            </Nav>
        </Navbar.Collapse>
    </Navbar>

