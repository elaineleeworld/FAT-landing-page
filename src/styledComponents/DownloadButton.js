import React, {Component} from 'react';

import cta from '../images/cta.png'


// const CustomizedButton = Button.extend`
//   background: url("./../images/cta.png");

//   :hover {
//   	background-color: #ff0000;
//   }
// `


class DownloadButton extends Component {

	render(){
		return(
			<div className="App-button">
			<a href="https://github.com/ff0000-ad-tech/tmpl-standard-base" target="_blank" rel="noopener noreferrer">
		       
		       <img src={cta} className="cta" alt="cta" />
		       
		        </a>
		     </div>
			);
	}
}

export default DownloadButton;