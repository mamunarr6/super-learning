import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-container">
                <h6>&copy; copyright 2021</h6>
                <div>
                    <FontAwesomeIcon className="text-white fs-4 mt-3 me-2" icon={faFacebook} />
                    <FontAwesomeIcon className="text-white fs-4 mt-3 me-2" icon={faLinkedin} />
                    <FontAwesomeIcon className="text-white fs-4 mt-3 me-2" icon={faInstagram} />
                    <FontAwesomeIcon className="text-white fs-4 mt-3 me-2" icon={faTwitter} />
                </div>
                <h6>created by Mamun Ar Roshid</h6>
            </Container>
        </div>
    );
};

export default Footer;