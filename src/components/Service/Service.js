import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { course_name, img, course_detail } = props.service;
    return (
        <div className="card-container">
            <Card style={{ width: '400px', height: '480px' }}>
                <Card.Img style={{ width: '399px', height: '300px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                        {course_detail}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;