import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import './TopFeatures.css'
import FeatureList from '../Feature/FeatureList.js'
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

class TopFeatures extends React.Component {
	constructor(props) {
		super(props)
		console.log('THIS.PROPS', this.props)
		this.state = {
			open: false,
			hideElement: false
		}
	}

	showMoreFeatures() {
		console.log('CLICKED')
		this.setState((prevState, props) => ({
			open: !this.state.open,
			hideElement: !this.state.hideElement
		}))
	}

	render() {
		const style = this.state.hideElement ? { display: 'none' } : {}

		const myFeature = [
			{
				img: require('../../images/Webpack.png'),
				label: 'ES6/WEBPACK',
				headline: 'CODE IS POWERFUL',
				text: ['Scalable, modular, testable', 'Flexible integration / systematic', 'Packaging & load-optimization']
			},
			{
				img: require('../../images/GithubNPM.png'),
				label: 'Open-Source',
				headline: 'JOIN THE COMMUNITY',
				text: ['Well-vetted, evolving code', 'Version-control improves stability', 'Define industry standards']
			},
			{
				img: require('../../images/Modular.png'),
				label: 'Modular',
				headline: 'USE COMPONENTS',
				text: ['Less code, more function', 'Better organized projects', 'Extensible']
			}
		]
		return (
			<div id="top-features">
				{myFeature.map(function(feature, index) {
					return (
						<Row key={index} className="feature">
							<Col xs={12} first="xs" last="sm">
								<img src={feature.img} className="feature-img" alt="feature img" />
							</Col>
							<Col xs={12}>
								<Row between="lg">
									<Col xs={12}>
										<h2 className="feature-label">{feature.label}</h2>
										<h3 className="feature-headline">{feature.headline}</h3>
										<ul className="feature-texts">
											{feature.text.map((text, i) => {
												return (
													<li key={`text-${i}`} className="feature-text">
														{text}
													</li>
												)
											})}
										</ul>
									</Col>
								</Row>
							</Col>
						</Row>
					)
				})}
				<img src={MoreArrow} onClick={this.showMoreFeatures.bind(this)} style={style} className="more-red-arrow" alt="more red arrow" />
				{this.state.open ? <FeatureList /> : null}
			</div>
		)
	}
}

export default TopFeatures
