import React,{useState} from 'react';
import {Jumbotron, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="App-header">
            <Navbar className="fixed-top" color="dark" dark expand="md">
                <NavbarBrand href="/"><span className="text-primary fa fa-bold"></span>logDev</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="ml-3">
                            <NavLink href="/home"><strong>Home</strong></NavLink>
                        </NavItem>
                        <NavItem className="ml-3">
                            <NavLink href="/aboutus"><strong>About</strong></NavLink>
                        </NavItem>
                        <NavItem className="ml-3">
                            <NavLink href="/post"><strong>Post</strong></NavLink>
                        </NavItem>
                        <NavItem className="ml-3">
                            <NavLink href="/contactus"><strong>Contact</strong></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Jumbotron>
                <div className="container">
                    <Row>
                        <Col md={12}>
                            <p>Develop your coding skills with us.</p>
                        </Col>
                    </Row>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Header;