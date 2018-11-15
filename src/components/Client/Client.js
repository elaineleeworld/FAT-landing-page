import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import './Client.css';

class Client extends React.Component {
    constructor(props){
        super(props);
        console.log('THIS.PROPS',this.props)
    }
        
    
    render(){

        const myClient = [
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')},
            {img: require('../../images/red_logo.png')}
           
        ]
    return (
         <div className='client-container'>
      {myClient.map(function(client, index){
         return (
          
            
              <Row className="client">
            <Col xs={12} first="xs" last="sm">
               <img src={client.img} />
                </Col>
             
             </Row>
            )
       })}
      </div> 
      
    );

    };
}

export default Client;