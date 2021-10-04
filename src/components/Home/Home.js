import { Button, Card, Col } from 'react-bootstrap';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Home.css';
import useServices from '../useServices/useServices';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCertificate, faGraduationCap, faStar, faStarAndCrescent, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';


const Home = () => {
    const [services] = useServices();
    const newservices = services.slice(0, 4);
    return (
        <>
            {/* -----------------
                    HEADER
            ------------------ */}
            <div className="header">
                <Container className="header-contianer">
                    <h1><span className="common-color">Education</span> And Training Organization.</h1>
                    <p>we proviet best education system for you amet mauris lobortis mauris inceptos eget. Urna imperdiet</p>
                    <Button className="regular-button">Our Courses</Button>
                </Container>
            </div>
            <Container>
                {/* -----------------
                     WELCOME
                ------------------ */}
                <div className="welcome mt-5 mb-5">
                    <h1 className="text-center"><span className="common-color"> Welcome </span>to Super Learning</h1>
                    <hr className="welcome-border" />
                </div>
                {/* -----------------
                     OUR COURSES
                ------------------ */}
                <div className="our-courses">
                    <h1>Explore Courses</h1>
                    <p>There are various kinds of courses available: from online courses to summer courses and intensive courses</p>
                </div>
                {/* -----------------
                     SERVICES
                ------------------ */}
                <Row xs={1} md={4} className="g-4">
                    {
                        newservices.map(newservice => <div key={newservice.id} className="card-container">
                            <Card style={{ width: '299px', height: '380px' }}>
                                <Card.Img style={{ width: '300px', height: '300px' }} variant="top" src={newservice.img} />
                                <Card.Body>
                                    <Card.Title>{newservice.course_name}</Card.Title>
                                    <Rating
                                        readonly
                                        initialRating={newservice.rating}
                                        emptySymbol={<FontAwesomeIcon className="common-color" icon={faStarHalfAlt} />}
                                        fullSymbol={<FontAwesomeIcon className="common-color" icon={faStar} />}></Rating>
                                    <span className="ms-1">({newservice.view})</span>
                                    <p>Duration: {newservice.duration} months</p>
                                    <Card.Text>
                                        {newservice.course_detail.slice(0, 50)}
                                        <Link className="view-more" to={'/services'}> View more</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </Row>
                {/* -----------------
                     WHY US
                ------------------ */}
                <Row className="mt-5 mb-5">
                    <h2 className="text-center">Why <span className="common-color">Us</span></h2>
                    <p className="text-center mb-5">There are lot of things to choice us.Please check given below:</p>
                    <Col className="mt-5 pt-4">
                        <Row className="mb-5">
                            <Col xs={2}>
                                <FontAwesomeIcon className="whyus-icon mt-2" icon={faBookOpen} />
                            </Col>
                            <Col>
                                <h5>Best Education System</h5>
                                <p>Advance Education Management</p>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col xs={2}>
                                <FontAwesomeIcon className="whyus-icon mt-2" icon={faGraduationCap} />
                            </Col>
                            <Col>
                                <h5>Learning Management</h5>
                                <p>LMS Integration</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <FontAwesomeIcon className="whyus-icon mt-2" icon={faCertificate} />
                            </Col>
                            <Col>
                                <h5>Online Certification</h5>
                                <p>Performance Based Certificate</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src="https://www.jumjournal.com/wp-content/uploads/2020/01/free-online-courses.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;