import React, {Component} from 'react';
import './Footer.css';
import FooterLogo from '../../images/footer_logo.png'

class Footer extends Component {

	render(){
		return(
		        <footer className="App-footer">
		         <div className='container'>
					  <img src={FooterLogo} className="footer-logo" alt="footer red logo" />
					</div>
		        </footer>
			);
	}
}

export default Footer;