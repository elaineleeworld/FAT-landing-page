import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import './FeatureList.css';
import LessArrow from '../../images/red_arrow_less.png'
import MoreArrow from '../../images/red_arrow_more.png'




        //  function FeaturesList( {features} ){
        //     return features.map(feature => (

        //         <div>
        //         <h3>{feature.label}</h3>
        //         <p>{feature.text}</p>
        //         </div>
        //         ))
        //     // console.log('FEATURES', features)
        // }

class FeatureList extends React.Component {
    constructor(props){
        super(props);
        console.log('THIS.PROPS',this.props)
        this.state = {
            hideElement: false,
            showElement: false
        }
    }

    toggleElement(){
        this.setState((prevState,props) =>({
            hideElement: !this.state.hideElement, //hide the Less Arrow
            showElement: !this.state.showElement //show the More Arrow again
        }))
    }
        
    
    render(){


        const style = this.state.hideElement ? { display: 'none'} : {};
        const style2 = this.state.showElement ? { display: 'block'} : {};

        const myFeature = [
            {
            img: require('../../images/GASP.png'),
            label: 'GSAP',
            text: 'Greensock Animation Platform has been an industry-standard for over a decade. Efficient & powerful animation framework.  Ubiquitously cached and usually dismissed against k-size.'
            },
            {
            img: require('../../images/BINARY.png'),
            label: 'Binary Compiling',
            text: 'Images & fonts are packaged as a single payload. Base64 + gzip adds bloat. Fewer network requests = faster load. Zero configuration. Just import your assets.  FAT handles the packaging.'    
            },
            {
            img: require('../../images/IAB.png'),
            label: 'IAB Specs',
            text: 'FAT is designed for IAB. 30k boilerplate. The rest is for creative. Fast-to-load. Only 2 payload requests (text & binary). All components are designed for banners.'    
            },
            {
            img: require('../../images/DYNAMIC.png'),
            label: 'Dynamic',
            text: 'Easily build dynamic units for programmatic markets. Reduced code/asset redundancy across versions/sizes. Smart auto-fitting text, alignment, element-positioning utilities.'
            }, 
            {
            img: require('../../images/SCALE.png'),
            label: 'Scale vs Scare',
            text: 'Users can decide their sweet-spot of complexity.  Zero-code redundancy using dynamic programming concepts. Simplicity: Hard-coded creative per size.'
            },
            {
            img: require('../../images/STANDARDIZED.png'),
            label: 'Standardized & Flexible',
            text: "Resource scheduling is easy with consistent patterns. Everybody can work with everybody's files. Capabilities are not compromised."
            }

        ]
    return (

         <div>
          <img src={MoreArrow} onClick={this.toggleElement.bind(this)} style={style2} className='red-arrow-more' alt='red arrow less'/>
      {myFeature.map(function(feature, index){
         return (
          
             <Row className="feature" style={style}>
            <Col key={index} xs={12} first="xs" last="sm">
               <img src={feature.img} />
                </Col>
             <Col xs={12}>
                <Row between="lg">
                   
                    <Col xs={12}>
                      <h3 >{feature.label}</h3>
                        <p>{feature.text}</p>
                    </Col>
                </Row>
            </Col>
              
             </Row>
            
            )
       })}
       <img src={LessArrow} onClick={this.toggleElement.bind(this)} style={style} className='red-arrow-less' alt='red arrow less'/>
      </div> 
      
    );

    };
}

export default FeatureList;