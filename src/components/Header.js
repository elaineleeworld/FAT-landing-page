import React, {Component} from 'react';
import DownloadButton from './DownloadButton.js';
import logo from '../images/logo.png';
import { BrowserRouter, Link } from 'react-router-dom';


class Header extends Component {

	render(){
		return(
			 <div className="App">
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">FF0000 Ad Tech ( FAT ) </h1>
		          <DownloadButton/>

		          <div className='App-intro'>
					<li><Link to='/'>Home</Link></li>
			        <li><Link to='/features'>Features</Link></li>
			        <li><Link to='/showcase'>Showcase</Link></li>
		        </div>
		        </header>
		        
		      </div>
			);
	}
}

export default Header;