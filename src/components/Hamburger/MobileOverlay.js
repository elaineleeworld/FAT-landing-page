import React from 'react';
import './MobileOverlay.css';
import { Link } from 'react-router-dom';

const MobileOverlay = props => (
		<nav className='mobile-overlay'>
			<div className='mobile-overlay-close' onClick={props.click}>X</div>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/features'>Features</Link></li>
				<li><Link to='/showcase'>Showcase</Link></li>
			</ul>
		</nav>
	);

export default MobileOverlay;