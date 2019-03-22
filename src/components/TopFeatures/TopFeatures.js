import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import './TopFeatures.css'
import FeatureList from '../Feature/FeatureList.js'

class TopFeatures extends React.Component {
	render() {
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
				<FeatureList />
			</div>
		)
	}
}

export default TopFeatures
