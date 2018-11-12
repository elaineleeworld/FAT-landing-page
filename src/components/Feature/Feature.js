import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Field from './Field';
import Hero from './Hero';
import './Feature.css';

const Feature = () => {
    return (
        <Row className="feature">
            <Col xs={12} first="xs" last="sm">
                <Hero />
            </Col>
            <Col xs={12}>
                <Row between="lg">
                   
                    <Col xs={12}>
                        <Field />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Feature;