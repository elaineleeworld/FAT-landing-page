import React, { Component } from 'react';
import Iframe from 'react-iframe';




// const videos = [intro_women, bats];

// const renderVideo = videos.map((videoSrc) =><video id="samp"  controls><source src={videoSrc} type="video/mp4"/></video>);



class Showcase extends Component {

	render(){
		// console.log("TEST", intro_women);
		return(
			<div className='showcase-parent'>
			   
			   {/* <div>{renderVideo}</div>*/}
			   <Iframe url="https://tech.wearered.com/"
			        width='100%'
			        height="1500"
			        id="red-showcase"
			        className="red-showcase"
			        display="initial"
			        position="relative"
			        allowFullScreen/>
		    </div>
			
			);
	};
}

export default Showcase;