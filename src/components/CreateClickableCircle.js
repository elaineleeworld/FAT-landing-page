import React, {Component} from 'react';
import CircleText from '../components/CircleText.js';




class CreateClickableCircle extends Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false
		}

		this.circleClicked = this.circleClicked.bind(this);
	}

		circleClicked(){
			this.setState({clicked: !this.state.clicked})
			console.log("CLICKED", this.state.clicked)
		}
	


	render(){
		let circlesArray = CircleText();
		console.log("CIRCLES ARRAY", circlesArray)
		console.log("CIRCLES ARRAY INDEX 0 ON", circlesArray.circles[0].on)
		return(
			<div><circle onClick={this.circleClicked}>{this.props.children}</circle></div>)
	}
}

export default CreateClickableCircle;