import React, { Component } from 'react';
import intro_women from '../images/intro_women.mp4';
import bats from '../images/bats.mp4';



const videos = [intro_women, bats];

const renderVideo = videos.map((videoSrc) =><video id="samp"  controls><source src={videoSrc} type="video/mp4"/></video>);



class Showcase extends Component {

	render(){
		console.log("TEST", intro_women);
		return(
			<div className='showcase-parent'>
			    <h1>Take a peek at some of the innovative ads we have created with the FAT framework</h1>
			    <div>{renderVideo}</div>
			    
			    
			 </div>
			
			);
	};
}

export default Showcase;