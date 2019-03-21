import React from 'react'
import './Hero.css'
import PlusSign from '../../images/plus-sign.png'

class BracketsList extends React.Component {
	constructor(props) {
		super(props)
		console.log('THIS.PROPS', this.props)
		this.state = {
			show: true
		}

		this.showBrackets = this.showBrackets.bind(this)
	}

	showBrackets() {
		this.setState((prevState, props) => ({
			show: !this.state.show
		}))
	}

	render() {
		const display = this.state.show ? { visibility: 'visible' } : { visibility: 'hidden' }

		const myBracket = [
			{
				img: require('../../images/brackets.png'),
				text: 'Templates optimized for load-speed, compatible with all ad networks.'
			},
			{
				img: require('../../images/brackets.png'),
				text: 'Open-source components, makes authoring & customization easy.'
			},
			{
				img: require('../../images/brackets.png'),
				text: 'Compiled builds, saves k-weight for your creative.'
			},
			{
				img: require('../../images/brackets.png'),
				text: 'Flexible tools, fits your process & enable automation.'
			}
		]

		return (
			<div className="bracket-container">
				{myBracket.map(function(bracket, index) {
					return (
						<div style={display} key={index} className="brackets-list">
							<p className="bracket-text">{bracket.text}</p>
							<img src={bracket.img} className="bracket-img" alt="bracket img" />
						</div>
					)
				})}
				<img src={PlusSign} onClick={this.showBrackets} className="plus-sign" alt="plus-sign" />
			</div>
		)
	}
}

export default BracketsList
