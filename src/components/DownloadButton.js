import React, {Component} from 'react';
import Button from 'react-button-component';


const CustomizedButton = Button.extend`
  color: #000;
  font-weight: bold;
  min-height: 20px !important;
  border: 2ps solid grey;
  border-radius: 5px;
  background: linear-gradient(70deg, #31c831, #31c831);
`


class DownloadButton extends Component {

	render(){
		return(
			<div className="App-button">
			<a href="https://github.com/ff0000-ad-tech/tmpl-standard-base" target="_blank">
		        <CustomizedButton>
		          Download Here
		        </CustomizedButton>
		        </a>
		     </div>
			);
	}
}

export default DownloadButton;