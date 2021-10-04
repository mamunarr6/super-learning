import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
            <Container>
                <Navbar variant="dark" className="nav-container">
                    <h2 className="sp-learning">Super Learning</h2>
                    <Nav variant="pills">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/aboutus">About Us</Link>
                        <Link className="nav-link" to="/joinus">Join Us</Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;