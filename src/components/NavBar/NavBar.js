import React, {Component} from 'react';

import { render } from 'react-dom';
import './NavBar.css';
import HamburgerButton from '../Hamburger/HamburgerButton';
import red_logo_2 from '../../images/red_logo2.png'
import { Link } from 'react-router-dom';

import GothamLight from '../../fonts/Gotham-Light.ttf'
import RubikRegular from '../../fonts/Rubik-Regular.ttf'

class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.main = React.createRef();
	}

	render(){
		return(
			<header className='navbar'>
		<nav className='navbar__container'>
		
			<div className='navbar__container-logo'>
			
			<a href='http://www.wearered.com' target="_blank" rel="noopener noreferrer">
							<img src={red_logo_2} className="red-logo" alt="red_logo" />
							
						
					
						<span className='vertical-divider'></span>
						
						<h2 className='red-ad-tech'>AD TECH</h2>
						</a>
			</div>

			<div className='spacer'></div>
			<div className='navbar__container-items'>
				<ul>
					<li><Link to='/'>HOME</Link></li>
					<li><Link to='/'>FEATURES</Link></li>
					<li><Link to='/'>ABOUT</Link></li>
					<li><Link to='/showcase'>SHOWCASE</Link></li>
				</ul>
			</div>
			<div className='hamburger'>
		          	<HamburgerButton click={this. props.hamburgerToggleClickHandler}/>
		    </div>
		</nav>
	</header>

	);
	};
}
	

export default NavBar;