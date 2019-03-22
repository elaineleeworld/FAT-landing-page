import React from 'react'
import { Redirect, withRouter } from 'react-router'
import './NavBar.css'
import HamburgerButton from '../Hamburger/HamburgerButton'
import red_logo_2 from '../../images/red_logo2.png'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		console.log('CURRENT LOCATION', props.location)

		this.state = {
			homePage: false
		}

		this.handleScrollHome = this.handleScrollHome.bind(this)
		this.handleScrollFeatures = this.handleScrollFeatures.bind(this)
		this.handleScrollAbout = this.handleScrollAbout.bind(this)
	}

	handleScrollHome() {
		// console.log('HOMEPAGE',this.state.homePage)
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	handleScrollFeatures() {
		if (this.props.location.pathname !== '/') {
			return <Redirect to="/" />
		}
		var element = document.getElementById('headline-style-topfeatures')
		element.scrollIntoView({ behavior: 'smooth' })
		window.scrollTo({
			top: element.offsetTop - 120,
			behavior: 'smooth'
		})
	}
	handleScrollAbout() {
		if (this.props.location.pathname !== '/') {
			return <Redirect to="/" />
		}
		var element = document.getElementById('homepage-about-red')
		element.scrollIntoView({ behavior: 'smooth' })
	}

	render() {
		return (
			<header className="navbar">
				<nav className="navbar__container">
					<div
						className="navbar__container-logo"
						onClick={() => {
							window.location.href = 'http://www.wearered.com'
						}}
					>
						<img src={red_logo_2} className="red-logo" alt="red_logo" />
						<div className="vertical-divider" />
						<div className="red-ad-tech">AD TECH</div>
					</div>

					<div className="spacer" />
					<div className="navbar__container-items">
						<ul>
							<li onClick={this.handleScrollHome}>
								<Link to="/">HOME</Link>
							</li>
							<li onClick={this.handleScrollFeatures}>
								<Link to="/">FEATURES</Link>
							</li>
							<li onClick={this.handleScrollAbout}>
								<Link to="/">ABOUT</Link>
							</li>
							<li>
								<a href="http://sizzle.wearered.com/">SHOWCASE</a>
							</li>
						</ul>
					</div>
					<div className="hamburger">
						<HamburgerButton click={this.props.hamburgerToggleClickHandler} />
					</div>
				</nav>
			</header>
		)
	}
}

export default withRouter(NavBar)
