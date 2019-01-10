import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import './TopFeatures.css';





        //  function FeaturesList( {features} ){
        //     return features.map(feature => (

        //         <div>
        //         <h3>{feature.label}</h3>
        //         <p>{feature.text}</p>
        //         </div>
        //         ))
        //     // console.log('FEATURES', features)
        // }

class TopFeatures extends React.Component {
    constructor(props){
        super(props);
        console.log('THIS.PROPS',this.props)
    }
        
    
    render(){

        const myFeature = [
            {
            img: require('../../images/Webpack.png'),
            label: 'Easy ES6/WEBPACK',
            headline: 'CODE IS POWERFUL',
            text: 'Javascript is more powerful than platform solutions. Better packaging / load-optimization. Integrates with existing systems / future-proof.'
            },
            {
            img: require('../../images/GithubNPM.png'),
            label: 'Open-Source',
            headline: 'JOIN THE COMMUNITY',
            text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
            },
            {
            img: require('../../images/Modular.png'),
            label: 'Modular',
            headline: 'USE EXISTING COMPONENTS',
            text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
            }
        ]
    return (
         <div>
            <h2 className='headline-style-topfeatures'>FEATURES</h2>
      {myFeature.map(function(feature, index){
         return (
          
             <Row className="feature">
            <Col xs={12} first="xs" last="sm">
               <img src={feature.img} />
                </Col>
             <Col xs={12}>
                <Row between="lg">
                   
                    <Col xs={12}>
                      <h2>{feature.label}</h2>
                        <h3>{feature.headline}</h3>
                        <p>{feature.text}</p>
                    </Col>
                </Row>
            </Col>
             </Row>
            )
       })}
      </div> 
      
    );

    };
}

export default TopFeatures;