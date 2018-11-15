import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import './Box.css';


class Box extends React.Component {
    constructor(props){
        super(props);
        console.log('THIS.PROPS',this.props)
    }
        
    
    render(){

        const myBox = [
            {
            number: '1',
            label: 'TEMPLATE',
            headline:'Start with a standard DCM template.',
            text: 'Need other ad-networks? No problem, we have templates for DC Studio, Sizmek, Flashtalking & more.'
            },
            {
            number: '2',
            label: 'TOOLING',
            headline:'Use the Creative Server.',
            text: 'Zero-configuration. Webpack/ES6, watch processes, localhosts, & compiling.'
            },
            {
            number: '3',
            label: 'AUTHORING',
            headline:'Use the FAT Framework & Greensock.',
            subheadline: '(or use your preferred libraries)',
            text: "Use your budgets for DESIGN, not tooling -- anything that's possible in an IAB container can be built!"
            },
            {
            number: '4',
            label: 'DELIVERIES',
            headline:'Compile & deliver to traffic.',
            text: 'Generate all of your targets without code redundancy!'
            }
        ]
    return (
         <div className='box-container'>
      {myBox.map(function(box, index){
         return (
          
            
              <Row className="box">
            <Col xs={12} first="xs" last="sm">
               <p className='box-number'>{box.number}</p>
                </Col>
             <Col xs={12}>
                <Row between="lg">
                   
                    <Col xs={12}>
                      <p className='box-label vertical-text'>{box.label}</p>
                        <p className='box-headline'>{box.headline}</p>
                        <p className='box-subheadline'>{box.subheadline}</p>
                        <p className='box-text'>{box.text}</p>
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

export default Box;