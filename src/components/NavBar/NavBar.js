import React, {Component} from 'react';
import './NavBar.css';
import HamburgerButton from '../Hamburger/HamburgerButton';
import red_logo_2 from '../../images/red_logo2.png'
import { Link } from 'react-router-dom';

import GothamLight from '../../fonts/Gotham-Light.ttf'
import RubikRegular from '../../fonts/Rubik-Regular.ttf'

const NavBar = props => (
	<header className='navbar'>
		<nav className='navbar__container'>
		
			<div className='navbar__container-logo'>
			
			{/*<a href='http://www.wearered.com' target="_blank" rel="noopener noreferrer">*/}
							<img src={red_logo_2} className="red-logo" alt="red_logo" />
							
						{/*</a>*/}
					
						<span className='vertical-divider'></span>
						
						<h2 className='red-ad-tech'>AD TECH</h2>
						
			</div>

			<div className='spacer'></div>
			<div className='navbar__container-items'>
				<ul>
					<li><Link to='/'>HOME</Link></li>
					<li><Link to='/features'>FEATURES</Link></li>
					<li><Link to='/about'>ABOUT</Link></li>
					<li><Link to='/showcase'>SHOWCASE</Link></li>
				</ul>
			</div>
			<div className='hamburger'>
		          	<HamburgerButton click={props.hamburgerToggleClickHandler}/>
		    </div>
		</nav>
	</header>

	);

{/*class NavBar extends Component {

	render(){
		return(
		        <nav className="navbar">
		         <div className='container'>
		          <div className='navbar__red-logo-container'>
		          <a href="http://www.ff0000.com" target="_blank" rel="noopener noreferrer">
		          <img src={red_logo} className="red-logo" alt="red_logo" />
		          </a>
		           <h1 className="navbar__title">AD TECH</h1>
		           </div>

		           <ul className='navbar__links-container'>
					<li><Link to='/' className='navbar__links'>Home</Link></li>
			        <li><Link to='/features' className='navbar__links'>Features</Link></li>
			        <li><Link to='/showcase' className='navbar__links'>Showcase</Link></li>
			        </ul>
		          </div>
		        </nav>
		        
		    
			);
	}
}*/}

export default NavBar;