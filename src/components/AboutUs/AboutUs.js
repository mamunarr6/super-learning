import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <Container>
            {/* -----------------
                     ABOUT US
                ------------------ */}
            <h1 className="text-center mt-4">About <span className="common-color">Us</span></h1>
            <Row className="mt-5">
                <h1 className="mb-3">Our Instructor</h1>
                <Col>
                    <img className="about-img" src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" alt="" />
                    <h5 className="mt-3 common-color">Joss Butler</h5>
                </Col>
                <Col>
                    <img className="about-img" src="https://menandhealing.ca/wp-content/uploads/2020/09/banner-psy-735x550.jpg" alt="" />
                    <h5 className="mt-3 common-color">John Due</h5>
                </Col>
                <Col>
                    <img className="about-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5uVvqnu12wk05yJCXblpEg65AIxmKY3UX3v9a7YYAFbRM6Xz4_GK2jt0kIsfvlgkVNU&usqp=CAU" alt="" />
                    <h5 className="mt-3 common-color">Joe Root</h5>
                </Col>
            </Row>

            {/* -----------------
                  LEARN SKILLS
                ------------------ */}
            <Row className="mt-5">
                <Col>
                    <h2>Learn new skills online with top educators</h2>
                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                    <ul>
                        <li>Techniques to engage effectively with vulnerable children and young people.

                        </li>
                        <li>Join millions of people from around the world learning together.

                        </li>
                        <li>Join millions of people from around the world learning together. Online learning is as easy and natural.

                        </li>
                    </ul>
                </Col>
                <Col className="ms-4">
                    <img className="col-img" src="https://us.123rf.com/450wm/adzicnatasa/adzicnatasa1904/adzicnatasa190400006/124260939-learn-something-new-new-skills-education-self-improvement-concept-date-marked-on-the-calendar-making.jpg?ver=6" alt="" />
                </Col>
            </Row>
            {/* -----------------
                    OUTCOME
                ------------------ */}
            <Row className="mt-5 mb-3">
                <Col>
                    <img className="col-img" src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202007/Capture_23-x523.PNG?dVtCxKxBb5niRdVvMdWMThvsMB7AmDAi" alt="" />
                </Col>
                <Col>
                    <h2>Learner outcomes on courses you will take</h2>
                    <ul>
                        <li>Techniques to engage effectively with vulnerable children and young people.
                        </li>
                        <li>Join millions of people from around the world learning together.
                        </li>
                        <li>Join millions of people from around the world learning together. Online learning is as easy and natural.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;