import React from 'react'
import './MobileOverlay.css'
import { Link } from 'react-router-dom'
import { Redirect, withRouter } from 'react-router'

class MobileOverlay extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			homePage: false
		}

		this.handleScrollHome = this.handleScrollHome.bind(this)
		this.handleScrollFeatures = this.handleScrollFeatures.bind(this)
		this.handleScrollAbout = this.handleScrollAbout.bind(this)
	}

	handleScrollHome(e) {
		this.props.click()

		this.setState((prevState, props) => ({
			homePage: !this.state.homePage
		}))
		if (this.state.homePage === true) {
			return <Redirect to="/" />
		}
		// document.getElementById("mobile-overlay").style.display = "none";
		// document.getElementById("mobile-overlay-close").style.display = "none";
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	handleScrollFeatures(e) {
		this.props.click()
		if (this.props.location.pathname !== '/') {
			return <Redirect to="/" />
		}
		// document.getElementById("mobile-overlay").style.display = "none";
		// document.getElementById("mobile-overlay-close").style.display = "none";
		var element = document.getElementById('headline-style-topfeatures')
		element.scrollIntoView({ behavior: 'smooth' })
		window.scrollTo({
			top: element.offsetTop - 120,
			behavior: 'smooth'
		})
	}
	handleScrollAbout(e) {
		this.props.click()
		if (this.props.location.pathname !== '/') {
			return <Redirect to="/" />
		}
		// document.getElementById("mobile-overlay").style.display = "none";
		// document.getElementById("mobile-overlay-close").style.display = "none";
		var element = document.getElementById('homepage-about-red')
		element.scrollIntoView({ behavior: 'smooth' })
	}

	render() {
		return (
			<nav id="mobile-overlay">
				<div id="mobile-overlay-close" onClick={this.props.click}>
					X
				</div>
				<ul>
					<li onClick={this.handleScrollHome}>
						<Link to="/">Home</Link>
					</li>
					<li onClick={this.handleScrollFeatures}>
						<Link to="/">Features</Link>
					</li>
					<li onClick={this.handleScrollAbout}>
						<Link to="/">About</Link>
					</li>
					<li onClick={this.props.click}>
						<a href="http://sizzle.wearered.com/">Showcase</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default withRouter(MobileOverlay)
