import React from 'react'
import './Hero.css'
import PlusSign from '../../images/plus-sign.png'
import bracketImg from '../../images/brackets.png'

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

		const brackets = [
			{
				text: 'Templates optimized for load-speed, compatible with all ad networks.'
			},
			{
				text: 'Open-source components, makes authoring & customization easy.'
			},
			{
				text: 'Compiled builds, saves k-weight for your creative.'
			},
			{
				text: 'Flexible tools, fits your process & enable automation.'
			}
		]

		return (
			<div className="bracket-container">
				<div className="bracket-row">
					<div style={display} className="brackets-list">
						<div className="bracket-text">{brackets[0].text}</div>
						<img src={bracketImg} className="bracket-img" alt="bracket img" />
					</div>
					<div style={display} className="brackets-list">
						<div className="bracket-text">{brackets[1].text}</div>
						<img src={bracketImg} className="bracket-img" alt="bracket img" />
					</div>
				</div>
				<div className="bracket-row">
					<img src={PlusSign} onClick={this.showBrackets} className="plus-sign" alt="plus-sign" />
				</div>
				<div className="bracket-row">
					<div style={display} className="brackets-list">
						<div className="bracket-text">{brackets[2].text}</div>
						<img src={bracketImg} className="bracket-img" alt="bracket img" />
					</div>
					<div style={display} className="brackets-list">
						<div className="bracket-text">{brackets[3].text}</div>
						<img src={bracketImg} className="bracket-img" alt="bracket img" />
					</div>
				</div>
			</div>
		)
	}
}

export default BracketsList
