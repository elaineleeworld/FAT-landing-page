import React, {Component} from 'react';

import red_logo from '../images/red_logo.png'
import { Link } from 'react-router-dom';


class NavBar extends Component {

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
}

export default NavBar;