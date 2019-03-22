import React from 'react'

import { Row, Col } from 'react-flexbox-grid'
import './FeatureList.css'
import LessArrow from '../../images/red_arrow_less.png'
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

class FeatureList extends React.Component {
	constructor(props) {
		super(props)
		console.log('THIS.PROPS', this.props)
		this.state = {
			hideElement: false,
			showElement: false
		}
	}

	toggleElement() {
		this.setState((prevState, props) => ({
			hideElement: !this.state.hideElement, //hide the Less Arrow
			showElement: !this.state.showElement //show the More Arrow again
		}))
	}

	render() {
		const style = this.state.hideElement ? { display: 'none' } : {}
		const style2 = this.state.showElement ? { display: 'block' } : {}

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
				<img src={MoreArrow} onClick={this.toggleElement.bind(this)} style={style2} className="red-arrow-more" alt="red arrow less" />
				{myFeature.map(function(feature, index) {
					return (
						<Row key={`key-${index}`} className="feature" style={style}>
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
				<img src={LessArrow} onClick={this.toggleElement.bind(this)} style={style} className="red-arrow-less" alt="red arrow less" />
			</div>
		)
	}
}

export default FeatureList
