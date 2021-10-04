import React from 'react';
import { Col, Container, Form, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import './JoinUs.css';

const JoinUs = () => {
    return (
        <div className="join-us">
            <Container>
                <div>
                    <h1 className="text-center pt-5 mb-5">Join With Us</h1>
                    <div>
                        <Form>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>
                            <Row sm={3} className="my-1 mb-4">
                                <Form.Label>
                                    Username
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <FormControl placeholder="Username" />
                                </InputGroup>
                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="regular-button my-3" type="submit">
                                Join Us
                            </Button><br />
                            <Form.Label>If you have another account . Please Log in:</Form.Label>
                            <Button className="regular-button mb-3 ms-3" type="submit">
                                Log in
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default JoinUs;