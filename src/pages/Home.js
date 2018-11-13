import React, { Component } from 'react';
import DownloadButton from '../styledComponents/DownloadButton.js';
import { Grid } from 'react-flexbox-grid';
import FeatureList from '../components/Feature/FeatureList.js';



const Home = () => (

	 // render(){
  //       const myFeatures = [
  //           {
  //           label: 'Approachable',
  //           text: 'Javascript is more powerful than platform solutions. Better packaging / load-optimization. Integrates with existing systems / future-proof.'
  //           },
  //           {
  //           label: 'Open-source',
  //           text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
  //           },
  //           {
  //           label: 'Modular',
  //           text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
  //           },
  //           {
  //           label: 'GSAP',
  //           text: 'Greensock Animation Platform has been an industry-standard for over a decade. Efficient & powerful animation framework.  Ubiquitously cached and usually dismissed against k-size.'
  //           }
  //       ]
  //   };
	<div className='homepage'>

	  <div className='homepage-hero'>
	  	 <div className='container'>
	    <h2>Faster development so you can focus on creative execution.</h2>
	    <p>Our lightweight Javascript framework enables custom, high-quality, high-volume production of banner ads -- create many variations and many sizes efficiently. Easily migrate them to any ad-network.
		</p>
	
		<p>The result is the smallest, most capable, fastest-loading ads in the industry.</p>
	  
	    <p>We provide common out-of-the box components (dates, video player, buttons) and enable you to manage dynamic states simply.</p>
	  <DownloadButton/>
	  </div>
	  </div>

	  <div className='homepage-features'>
	  	 <Grid fluid style={{ width: '85%', margin: '0 auto', padding: '20px'}}>
	  	 	<FeatureList/>
	  	 </Grid>
	  </div>

	  <div className='homepage-steps'>
		  <div className='container'>
		  	<h2>4 easy steps to get started.</h2>
		  	<div className='box'> <h1>1</h1>
		  	{/*<p>Start with a standard DCM template.</p>*/}
		  	</div>
		  	<div className='box'> <h1>2</h1>
		  	</div>
		  	<div className='box'> <h1>3</h1>
		  	</div>
		  	<div className='box'> <h1>4</h1>
		  	</div>

		  	<DownloadButton/>
	  	</div>
	  </div>

	  <div className='homepage-clients'>
	   <div className='container'>
	  <h2>Clients that have used our framework.</h2>
	  </div>

	  </div> 

   </div> // end of homepage
)

export default Home;