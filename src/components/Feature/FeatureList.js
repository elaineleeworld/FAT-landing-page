import React from 'react'

import { Row, Col } from 'react-flexbox-grid'
import './FeatureList.css'

class FeatureList extends React.Component {
	render() {
		const myFeature = [
			{
				img: require('../../images/GASP.png'),
				label: 'GSAP',
				headline: 'GREENSOCK ANIMATION PLATFORM',
				text: ['Simple, powerful framework', 'The standard for over a decade', 'Ubiquitously cached, dismissed k-size']
			},
			{
				img: require('../../images/BINARY.png'),
				label: 'Binary Compiling',
				headline: 'IMAGES & FONTS IN A SINGLE PAYLOAD',
				text: ['25% less bloat than base64 + gzip', 'Fewer network requests = faster load', 'Zero configuration']
			},
			{
				img: require('../../images/IAB.png'),
				label: 'IAB Specs',
				headline: 'STANDARDS COMPLIANT',
				text: ['30k core, the rest is for creative', 'Fast: Only 2 payload requests', 'Components designed for banners']
			},
			{
				img: require('../../images/DYNAMIC.png'),
				label: 'Dynamic',
				headline: 'BUILD PROGRAMMATICALLY',
				text: ['Text-fit & layout utilities', 'Manage many dynamic states', 'Reduce code across versions / sizes']
			},
			{
				img: require('../../images/SCALE.png'),
				label: 'Scale vs Scare',
				headline: 'SYSTEMS SOLVE COMPLEXITY',
				text: ['Strong patterns for volume', 'Creative control is maintained', 'Faster loading ads']
			},
			{
				img: require('../../images/STANDARDIZED.png'),
				label: 'Standardized & Flexible',
				headline: 'ITERATE & DELIVER FASTER',
				text: ['Schedule with confidence', 'Shareable / workable code', 'Consistent quality']
			}
		]
		return (
			<div>
				{myFeature.map(function(feature, index) {
					return (
						<Row key={`key-${index}`} className="feature">
							<Col key={index} xs={12} first="xs" last="sm">
								<img src={feature.img} alt="feature list" />
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
			</div>
		)
	}
}

export default FeatureList
