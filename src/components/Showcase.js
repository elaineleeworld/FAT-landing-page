import React, { Component } from 'react';
import intro_women from '../images/intro_women.mp4';

console.log('VIDEO:', intro_women);

// const Showcase = () => (
//   <div className='showcase-parent'>
//     <h1>Take a peek at some of the innovative ads we have created with the FAT framework</h1>
//   </div>
// )
// export default function MyVideo(){
// 	return <video width="300" height="250" src={intro_women} type="video/mp4" />;
// }

class Showcase extends Component {
	render(){
		console.log("TEST", intro_women);
		return(
			<div className='showcase-parent'>
			    <h1>Take a peek at some of the innovative ads we have created with the FAT framework</h1>
			    <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>

		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
		      <video id="samp"  controls>

		        <source src={intro_women} type="video/mp4">
		        </source>
		      </video>
			 </div>
			
			)
	}
}

export default Showcase;