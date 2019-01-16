import React from 'react';
import './MobileOverlay.css';
import { Link } from 'react-router-dom';

const MobileOverlay = props => (
		<nav className='mobile-overlay'>
			<div className='mobile-overlay-close' onClick={props.click}>X</div>
			<ul>
				<li onClick={props.click}><Link to='/'>Home</Link></li>
				<li onClick={props.click}><Link to='/'>Features</Link></li>
				<li onClick={props.click}><Link to='/'>About</Link></li>
				<li onClick={props.click}><Link to='/showcase'>Showcase</Link></li>
			</ul>
		</nav>
	);

export default MobileOverlay;