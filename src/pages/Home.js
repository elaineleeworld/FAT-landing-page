import React, { Component } from 'react';
import DownloadButton from '../styledComponents/DownloadButton.js';
import { Grid } from 'react-flexbox-grid';
import BracketsList from '../components/Hero/Hero.js';
import FeatureList from '../components/Feature/FeatureList.js';
import TopFeatures from '../components/TopFeatures/TopFeatures.js';
import Box from '../components/Box/Box.js';
import Client from '../components/Client/Client.js';
import Collapsible from 'react-collapsible';
import MoreArrow from '../images/red_arrow_more.png'
import LessArrow from '../images/red_arrow_less.png'
import BG from '../images/bg_image_top.jpg'
import PlusSign from '../images/plus-sign.png'
import DownloadTemplate from '../images/download_template.png'
import BrowseGithub from '../images/browse_github.png'
import Peeps from '../images/peeps.png'


import SharpGroteskMedium24 from '../fonts/SharpGroteskMedium24.otf'
import RubikLight from '../fonts/Rubik-Light.ttf'



console.log("ARROW", MoreArrow)



class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = { 
			open: true,
			hideElement: false
		}
	}
	collapseFeatures(){
		console.log("CLICKED")
	this.setState((prevState,props) => ({
		open: !this.state.open,
		
		}))
	}
	hideElement(){
		this.setState((prevState,props) =>({
			hideElement: !this.state.hideElement
		}))
	}
	toggleImage(){
		this.setState((prevState,props) =>({

		}))
	}
	render(){

		const style = this.state.hideElement ? { display: 'none'} : {};

		return(

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
	  <Collapsible trigger={<img src={MoreArrow} onClick={this.hideElement.bind(this)} style={style} className='more-red-arrow' alt='more red arrow'/>}>
	   
	  	 <Grid fluid style={{ width: '85%', margin: '0 auto', padding: '20px'}}>
	  	 	<FeatureList/>
	  	 </Grid>
	  	 
	  <img src={LessArrow} onClick={this.collapseFeatures.bind(this)}  className='red-arrow-less' alt='red arrow less'/>
	 {/* {this.state.open ? null : <img src={MoreArrow}/>}*/ }
	  	 
	  	  </Collapsible>
	  	   
	  </div>
	 
	  <div className='homepage-steps'>
		  <div className='container'>
		  	<h1 className='headline-style-steps'>4 EASY STEPS TO GET STARTED</h1>
		  	<Box />

		  	<DownloadButton/>
	  	</div>
	  </div>

	  <div className='homepage-download'>
	  	<div className='download-container'>
	  		<a href="https://github.com/ff0000-ad-tech/tmpl-standard-base" target="_blank" rel="noopener noreferrer">
		       <img src={DownloadTemplate} className="download-template" alt="download template" />
		        </a>
	  	</div>
	  	<div className='browse-container'>
	  		<a href="https://github.com/ff0000-ad-tech/tmpl-standard-base" target="_blank" rel="noopener noreferrer">
		       <img src={BrowseGithub} className="browse-github" alt="browse github" />
		        </a>
	  	</div>
	  </div>

	  <div className='homepage-clients'>
	   <div className='container'>
	  <h2 className='headline-style-clients'>POWERED BY RED AD TECH</h2>
	  <Client/>
	  </div>
	  	
	  </div> 

	   <div className='homepage-peeps'>


		    <p className='peeps-headline'>ABOUT RED</p>
	  </div> 
	  <div className='homepage-about'>
	  <div className='container'>
	  		
	    	<p className="about-text-one">RED has been building display ads for over a decade. We were the first to deliver HTML 5. We innovated dynamic. We license our own CMP, Velvet.</p>
	    	
	    	<p className="about-text-two">We believe ads should load fast & look amazing - whether our agency built them, or yours.</p>
		
	 </div>
	  </div>

   </div> // end of homepage
)
	}
}

export default Home;