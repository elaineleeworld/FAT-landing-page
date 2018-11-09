import React from 'react';
import './HamburgerButton.css';

const HamburgerButton = props => (
	<button className='toggle-button' onClick={props.click}>
		<div className='toggle-button__line'/>
		<div className='toggle-button__line'/>
		<div className='toggle-button__line'/>
	</button>
	);

export default HamburgerButton;