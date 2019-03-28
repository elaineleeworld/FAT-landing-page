import React from 'react'

import { Row, Col } from 'react-flexbox-grid'
import './Box.css'
import oneBg from './images/1.png'
import twoBg from './images/2.png'
import threeBg from './images/3.png'
import fourBg from './images/4.png'

class Box extends React.Component {
	constructor(props) {
		super(props)
		console.log('THIS.PROPS', this.props)
	}

	render() {
		const myBox = [
			{
				number: {
					src: oneBg,
					alt: 'Step 1'
				},
				label: 'TEMPLATE',
				headline: 'Start with a standard template.',
				text: 'Or generate a specific template for Google, Sizmek, Flashtalking & more.'
			},
			{
				number: {
					src: twoBg,
					alt: 'Step 2'
				},
				label: 'AUTHORING',
				headline: 'Write with ES6 & Greensock.',
				subheadline: '(or use your preferred libraries)',
				text: "Use your budgets for DESIGN, not tooling -- anything that's possible in an IAB container can be built!"
			},
			{
				number: {
					src: threeBg,
					alt: 'Step 3'
				},
				label: 'TOOLING',
				headline: 'Creative Server does hard stuff.',
				text: 'Zero-configuration Webpack/ES6, watch-processes, localhosts, & packaging.'
			},
			{
				number: {
					src: fourBg,
					alt: 'Step 4'
				},
				label: 'DELIVERIES',
				headline: 'Compile & deliver to traffic.',
				text: 'Enjoy consistency & performance, at scale, without code redundancy!'
			}
		]
		return (
			<div className="box-container">
				{myBox.map(function(box, index) {
					return (
						<Row key={index} className="box">
							<Col xs={12} first="xs" last="sm">
								<div className="box-number">
									<img src={box.number.src} alt={box.number.alt} />
								</div>
							</Col>
							<Col xs={12}>
								<Row between="lg">
									<Col xs={12}>
										<p className="box-label vertical-text">{box.label}</p>
										<div className="box-headline-container">
											<p className="box-headline">{box.headline}</p>
											<p className="box-subheadline">{box.subheadline}</p>
										</div>

										<p className="box-text">{box.text}</p>
									</Col>
								</Row>
							</Col>
						</Row>
					)
				})}
			</div>
		)
	}
}

export default Box
