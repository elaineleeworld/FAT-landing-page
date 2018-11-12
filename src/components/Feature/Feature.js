import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Field from './Field';
import Hero from './Hero';
import './Feature.css';

class Feature extends React.Component {
    render(){
        const myFeatures = [
            {
            label: 'Approachable',
            text: 'Javascript is more powerful than platform solutions. Better packaging / load-optimization. Integrates with existing systems / future-proof.'
            },
            {
            label: 'Open-source',
            text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
            },
            {
            label: 'Modular',
            text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
            },
            {
            label: 'GSAP',
            text: 'Greensock Animation Platform has been an industry-standard for over a decade. Efficient & powerful animation framework.  Ubiquitously cached and usually dismissed against k-size.'
            }
        ]

        function FeaturesList( {features} ){
            return features.map(feature => (
                <div>
                <h3>{feature.label}</h3>
                <p>{feature.text}</p>
                </div>
                ))
        }
    
  
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

    };
}

export default Feature;