import React, { Component } from 'react';
import intro_women from '../images/intro_women.mp4';


function renderVideo(props){
	const videos = props.videoSrc;
	const renderVideo = videos.map((videoSrc) =>
		<source src={videoSrc} type="video/mp4"/>    
		      );
		    
};

const videos = [intro_women, intro_women, intro_women];



class Showcase extends Component {

	render(){
		console.log("TEST", intro_women);
		return(
			<div className='showcase-parent'>
			    <h1>Take a peek at some of the innovative ads we have created with the FAT framework</h1>
			    <video id="samp"  controls>{renderVideo}</video>
			    
			 </div>
			
			);
	};
}

export default Showcase;