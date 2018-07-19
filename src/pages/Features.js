import React, {Component} from 'react';
import Particle from '../components/Particle.js';
import Circle from '../components/Circle.js';


class Features extends Component {
	constructor(props){
		super(props)
		this.state = {
		text1: { clicked: true },
		text2: { clicked: true }
		}



	}

	render(){
		return(
			<div className="features-container">
			<div>
		    <h1>Unique features of our framework</h1>
		    </div>
		  	<div className='features-parent'>
		  	
			    <div className='particles-js'>
			    <Particle />
			    </div>
			    <Circle/>
			    {/*<Circle/>
			    <Circle/>*/}
			   {/* <circle onClick={ () => this.setState({clicked: !this.state.clicked})}> {this.state.clicked ? 'Open source' : "NPM"}</circle>*/}
			    {/*<circle onClick={ () => console.log(this) }></circle>*/}
			    {/*<circle onClick={ () => this.setState({clicked: !this.state.clicked})}> {this.state.clicked ? 'TEST' : "Binary"}</circle>*/}
			    {/*<circle>ES6</circle>
			    <circle>Javascript</circle>
			    <circle>Within IAB Specs</circle>
			    <circle>Streamlined</circle>
			    <circle>High Volume</circle>
			    <circle>Optimized</circle>
			    <circle>Dynamic</circle>
			    <circle>Greensock</circle>
			    <circle>Efficiency</circle>*/}

			  
			 </div>
		</div>)
	}
}


		
export default Features;