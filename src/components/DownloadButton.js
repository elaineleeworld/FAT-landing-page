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
		        <CustomizedButton onClick={() => {alert('Welcome!')}}>
		          Download Here
		        </CustomizedButton>
		     </div>
			);
	}
}

export default DownloadButton;