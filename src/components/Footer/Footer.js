import React, { Component } from 'react'
import './Footer.css'
import FooterLogo from '../../images/footer_logo.png'
import InstagramLogo from '../../images/instagram_logo.png'
import TwitterLogo from '../../images/twitter_logo.png'
import LinkedInLogo from '../../images/linkedin_logo.png'
import { Redirect, withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class Footer extends Component {

	constructor(props) {
		super(props)
		// console.log('CURRENT LOCATION', props.location)

		// this.state = {
		// 	homePage: false
		// }

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
		
		var element = document.getElementById('headline-style-topfeatures')
		element.scrollIntoView({ behavior: 'smooth' })
		window.scrollTo({
			top: element.offsetTop - 120,
			behavior: 'smooth'
		})
	
	}
	handleScrollAbout() {
		
		// window.scrollTo(0, document.body.scrollHeight);
		var element = document.getElementById('homepage-about-red')
		element.scrollIntoView({ behavior: 'smooth' })
	}
	render() {
		return (
			<footer className="App-footer">
				<div className="container">
					<div className="footer__link__items">
						<ul>
							<li onClick={this.handleScrollHome}>Home</li>
							<li onClick={this.handleScrollFeatures}>Features</li>
							<li onClick={this.handleScrollAbout}>About</li>
							<li><a href="http://sizzle.wearered.com/">Showcase</a></li>
						</ul>
					</div>

					<div className="footer__contact_info">
						<p>CONTACT@WEARERED.COM</p>
						<p>310.399.4242</p>
						<p>
							3420 OCEAN PARK BLVD <br />
							SUITE 2000 <br />
							SANTA MONICA, CA 90405
						</p>

						<div className="footer__social_media_links">
							<img src={InstagramLogo} className="instagram-logo" alt="footer instagram logo" />
							<img src={TwitterLogo} className="twitter-logo" alt="footer twitter logo" />
							<img src={LinkedInLogo} className="linkedin-logo" alt="footer linkedin logo" />
						</div>
					</div>

					<div className="footer__logo">
						<img src={FooterLogo} className="footer__red_logo" alt="footer red logo" />
						<p className="footer__copyright">&copy; 2019 RED. ALL RIGHTS RESERVED</p>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
