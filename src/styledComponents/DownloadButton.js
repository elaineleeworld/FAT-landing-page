import React, {Component} from 'react';
import Button from 'react-button-component';


const CustomizedButton = Button.extend`
  color: #fff;
  font-weight: bold;
  min-height: 20px !important;
  border: 2px solid red;
  border-radius: 1px;
  background: black;
  padding: 5px 5px;
  margin-bottom: 20px;
`


class DownloadButton extends Component {

	render(){
		return(
			<div className="App-button">
			<a href="https://github.com/ff0000-ad-tech/tmpl-standard-base" target="_blank" rel="noopener noreferrer">
		        <CustomizedButton>
		          GET STARTED
		        </CustomizedButton>
		        </a>
		     </div>
			);
	}
}

export default DownloadButton;