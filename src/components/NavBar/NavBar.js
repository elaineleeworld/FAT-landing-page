import React, {Component} from 'react';
import createBrowserHistory from 'history';

import { render } from 'react-dom';
import './NavBar.css';
import HamburgerButton from '../Hamburger/HamburgerButton';
import red_logo_2 from '../../images/red_logo2.png'
import { Link } from 'react-router-dom';

import GothamLight from '../../fonts/Gotham-Light.ttf'
import RubikRegular from '../../fonts/Rubik-Regular.ttf'

class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.main = React.createRef();
		// this.state={};

		// this.stickyNav = this.stickyNav.bind(this);
	}

	// stickyNav(){
	// 	this.setState({scroll: window.scrollY});
	// }

	//  componentDidMount() {
	// 	const el = document.querySelector('nav');
	// 	this.setState({top: el.offsetTop, height: el.offsetHeight});
	// 	window.addEventListener('scroll', this.handleScroll);
	// }
  
 //  componentDidUpdate() {
	// 	this.state.scroll > this.state.top ? 
	// 		document.body.style.paddingTop = `${this.state.height}px` :
	// 		document.body.style.paddingTop = 0;
	// }

	 handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth"
    });
}
	 handleScrollabout = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: 3600,
      left: 0,
      behavior: "smooth"
    });
}
    handleScrollhome = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
}
	
	// navigateHome(props){
		
	// 	this.props.history.push('/');
	// }
  

	render(){
		return(
			<header className='navbar'>
		<nav className='navbar__container'  >
		
			<div className='navbar__container-logo'>
			
			<a href='http://www.wearered.com' target="_blank" rel="noopener noreferrer">
							<img src={red_logo_2} className="red-logo" alt="red_logo" />
							
						
					
						<span className='vertical-divider'></span>
						
						<h2 className='red-ad-tech'>AD TECH</h2>
						</a>
			</div>

			<div className='spacer'></div>
			<div className='navbar__container-items'>
				<ul>
					<li><Link ref={this.main} onClick={this.handleScrollhome} to='/'>HOME</Link></li>
					<li><Link ref={this.main} onClick={this.handleScroll} to='/'>FEATURES</Link></li>
					<li><Link ref={this.main} onClick={this.handleScrollabout} to='/'>ABOUT</Link></li>
					<li><Link to='/showcase'>SHOWCASE</Link></li>
				</ul>
			</div>
			<div className='hamburger'>
		          	<HamburgerButton click={this. props.hamburgerToggleClickHandler}/>
		    </div>
		</nav>
	</header>

	);
	};
}
	

export default NavBar;