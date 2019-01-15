import React, {Component} from 'react';
import './Footer.css';
import FooterLogo from '../../images/footer_logo.png'
import InstagramLogo from '../../images/instagram_logo.png'
import TwitterLogo from '../../images/twitter_logo.png'
import LinkedInLogo from '../../images/linkedin_logo.png'
import { Link } from 'react-router-dom';

class Footer extends Component {

	render(){
		return(
		        <footer className="App-footer">

			         <div className='container'>
			         

				         <div className='footer__link__items'>
							<ul>
								<li><Link to='/'>Home</Link></li>
								<li><Link to='/features'>Features</Link></li>
								<li><Link to='/about'>About</Link></li>
								<li><Link to='/showcase'>Showcase</Link></li>
							</ul>
						</div>

						<div className='footer__contact_info'>
							<p>CONTACT@WEARERED.COM</p>
							<p>310.399.4242</p>
							<p>3420 OCEAN PARK BLVD <br/>SUITE 2000 <br/>SANTA MONICA, CA 90405</p>

							<div className='footer__social_media_links'>
								<img src={InstagramLogo} className="instagram-logo" alt="footer instagram logo" />
								<img src={TwitterLogo} className="twitter-logo" alt="footer twitter logo" />
								<img src={LinkedInLogo} className="linkedin-logo" alt="footer linkedin logo" />
							</div>
						</div>
					

						<div className='footer__logo'>
							  <img src={FooterLogo} className='footer__red_logo' alt="footer red logo" />
						 <p className='footer__copyright'>&copy; 2018 RED. ALL RIGHTS RESERVED</p>
						 </div>
						 
					 </div>
		        </footer>
			);
	}
}

export default Footer;