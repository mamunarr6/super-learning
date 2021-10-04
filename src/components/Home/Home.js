import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Home.css';
import useServices from '../useServices/useServices';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useServices();
    const newservices = services.slice(0, 4);
    return (
        <>
            <div className="header">
                <Container className="header-contianer">
                    <h1><span>Education</span> And Training Organization.</h1>
                    <p>we proviet best education system for you amet mauris lobortis mauris inceptos eget. Urna imperdiet</p>
                    <Button className="regular-button">Our Courses</Button>
                </Container>
            </div>
            <Container>
                <div>
                    <h1>Welcome to Super Learning</h1>
                    <h3>Your perfect friend for learning and acquiring knowledge for making yourself a skilled person</h3>
                </div>
                <div className="our-courses">
                    <h1>Explore Courses</h1>
                    <p>There are various kinds of courses available: from online courses to summer courses and intensive courses</p>
                </div>
                <Row xs={1} md={4} className="g-4">
                    {
                        newservices.map(newservice => <div className="card-container">
                            <Card style={{ width: '299px', height: '380px' }}>
                                <Card.Img style={{ width: '300px', height: '300px' }} variant="top" src={newservice.img} />
                                <Card.Body>
                                    <Card.Title>{newservice.course_name}</Card.Title>
                                    <Card.Text>
                                        {newservice.course_detail.slice(0, 50)}
                                        <Link className="view-more" to={'/services'}> View more</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;