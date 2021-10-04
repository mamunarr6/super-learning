import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-container">
                <h6>&copy; copyright 2021</h6>
                <h6>icon</h6>
                <h6>created by Mamun Ar Roshid</h6>
            </Container>
        </div>
    );
};

export default Footer;