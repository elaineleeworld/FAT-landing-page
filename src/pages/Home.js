import React, { Component } from 'react';
import DownloadButton from '../styledComponents/DownloadButton.js';
import { Grid } from 'react-flexbox-grid';
import BracketsList from '../components/Hero/Hero.js';
import FeatureList from '../components/Feature/FeatureList.js';
import TopFeatures from '../components/TopFeatures/TopFeatures.js';
import Box from '../components/Box/Box.js';
import Client from '../components/Client/Client.js';
import Collapsible from 'react-collapsible';
import Arrow from '../images/red_arrow.png'
import BG from '../images/bg_image_top.jpg'
import PlusSign from '../images/plus-sign.png'


import SharpGroteskMedium24 from '../fonts/SharpGroteskMedium24.otf'
import RubikLight from '../fonts/Rubik-Light.ttf'



console.log("ARROW", Arrow)

const Home = () => (


	<div className='homepage'>

	  <div className='homepage-hero'>
	  	 <div className='container'>
	    <p className='hero-headline'>Light-weight, open-source, ES6</p>
	    <p className='hero-text-one'>AD DEVELOPMENT</p>
		<p className='hero-text-two'>Author the best creative. Deliver big programmatic buys: <br/>Hundreds of targets, many sizes, and many devices.</p>
		<BracketsList/>
			<img src={PlusSign} className="plus-sign" alt="plus-sign" />
		
	  <DownloadButton/>
	  </div>
	  </div>
	  
	  <div className='homepage-features'>
	  <TopFeatures/>
	  <Collapsible trigger={<img src={Arrow} className='red-arrow' alt='red arrow'/>}>
	   
	  	 <Grid fluid style={{ width: '85%', margin: '0 auto', padding: '20px'}}>
	  	 	<FeatureList/>
	  	 </Grid>
	  	 
	  	
	  	  </Collapsible>
	  </div>
	 
	  <div className='homepage-steps'>
		  <div className='container'>
		  	<h1>4 easy steps to get started.</h1>
		  	<Box />

		  	<DownloadButton/>
	  	</div>
	  </div>

	  <div className='homepage-clients'>
	   <div className='container'>
	  <h2>Clients that have used our framework.</h2>
	  <Client/>
	  </div>
	  	
	  </div> 

   </div> // end of homepage
)

export default Home;