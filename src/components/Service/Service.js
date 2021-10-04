import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { course_name, img, course_detail, rating, view, duration } = props.service;
    return (
        <div className="card-container">
            <Card style={{ width: '400px', height: '580px' }}>
                <Card.Img style={{ width: '399px', height: '300px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Rating
                        readonly
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon className="common-color" icon={faStarHalfAlt} />}
                        fullSymbol={<FontAwesomeIcon className="common-color" icon={faStar} />}
                    ></Rating>
                    <span className="ms-1">({view})</span>
                    <p>Duration: {duration} months</p>
                    <Card.Text>
                        {course_detail}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;