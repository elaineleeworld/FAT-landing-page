import React, {Component} from 'react';
import Particle from '../components/Particle.js';


class Features extends Component {
	constructor(props){
		super(props)
		this.state = {
		text1: { clicked: true }
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

			    <circle onClick={ () => this.setState({clicked: !this.state.clicked})}> {this.state.clicked ? 'Open source collaboration benefits from standards' : "NPM"}</circle>
			    <circle>Binary</circle>
			    <circle>ES6</circle>
			    <circle>Javascript</circle>
			    <circle>Within IAB Specs</circle>
			    <circle>Streamlined</circle>
			    <circle>High Volume</circle>
			    <circle>Optimized</circle>
			    <circle>Dynamic</circle>
			    <circle>Greensock</circle>
			    <circle>Efficiency</circle>

			  
			 </div>
		</div>)
	}
}


		
export default Features;