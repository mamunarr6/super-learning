import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useServices from '../useServices/useServices';

const Services = () => {
    const [services] = useServices();
    console.log(services.slice(0, 4))
    return (

        <Container style={{ marginTop: '20px' }}>
            {/* -----------------
                    SERVICES
                ------------------ */}
            <h1 style={{ textAlign: 'center', margin: '15px' }}>Our <span className="common-color">Courses</span></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;