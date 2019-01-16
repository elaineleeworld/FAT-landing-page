import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import './Hero.css';
import PlusSign from '../../images/plus-sign.png'



class BracketsList extends React.Component {
    constructor(props){
        super(props);
        console.log('THIS.PROPS',this.props)
    }
        
    
    render(){ 


   const myBracket = [
            {
            img: require('../../images/brackets.png'),
            text: 'Templates are compatible with all ad networks.'
            },
            {
            img: require('../../images/brackets.png'),
            text: 'Battle-tested components make standard & dynamic units easy.'    
            },
            {
            img: require('../../images/brackets.png'),
            text: 'Auto-compiling builds save you the most k-weight for your creative.'    
            },
            {
            img: require('../../images/brackets.png'),
            text: 'Flexible tools enable automation & simplify production.'
            }

        ]

         return (
         <div className='bracket-container'>
      {myBracket.map(function(bracket, index){
         return (
          
             
       <div key={index} className='brackets-list'>
        <p className='bracket-text'>{bracket.text}</p>
               <img src={bracket.img} className='bracket-img'/>
                  </div>
    
            
            )
       })}
      <img src={PlusSign} className="plus-sign" alt="plus-sign" />

      </div> 
      
    );
         

    };
}

export default BracketsList;