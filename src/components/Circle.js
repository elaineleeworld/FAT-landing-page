import React, {Component} from 'react';

const circleList = [
	{id: 0, on: "NPM", off: "Open source"},
	{id: 1, on: "Binary Compile", off: "Fewer network requests"},
	{id: 2, on: "IAB", off: "Built to meet IAB specs"}
]




const renderCircles = circleList.map((circle) => <circle id="test" key={circle.id}><p id={circle.id}>{circle.on}</p></circle>)




class Circle extends Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false
		}
		this.circleUpdate = this.circleUpdate.bind(this);
		console.log("TRACE PROPS", props)
	}

		circleUpdate(event){
			var id = event.target.id
			console.log("CLICKED", circleList)
			console.log("EVENT ID", id)
			this.setState({clicked: !this.state.clicked})
			for (var i = 0; i < circleList.length; i++) {
				
			console.log("STATE", this.state.clicked)
			// console.log("ID", this.props)
			if (this.state.clicked){
				circleList[i].on
				console.log("ON", circleList[i].on)
			} else {
				circleList[i].off
				console.log("OFF", circleList[i].off)
			}
		}	
			
		}




	

	render(){
		return(
			<div id="parent" onClick={this.circleUpdate}>
			{renderCircles}
			</div>
			)
	}
}

export default Circle;