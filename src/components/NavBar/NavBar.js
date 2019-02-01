import React from 'react';
import { Redirect, withRouter } from 'react-router';
import './NavBar.css';
import HamburgerButton from '../Hamburger/HamburgerButton';
import red_logo_2 from '../../images/red_logo2.png'
import { Link } from 'react-router-dom';



class NavBar extends React.Component{
	constructor(props){
		super(props)
		console.log("CURRENT LOCATION", props.location);
		// this.main = React.createRef();
		// this.heroSection = React.createRef();
		// this.featuresSection = React.createRef();

		this.state = {
			homePage: false
		}

		this.handleScrollHome = this.handleScrollHome.bind(this);
		this.handleScrollFeatures = this.handleScrollFeatures.bind(this);
		this.handleScrollAbout = this.handleScrollAbout.bind(this);
		
	}

	

// 	 handleScroll = e => {
//     e.preventDefault();
//     const main = this.main.current;
//     window.scrollTo({
//       top: 600,
//       left: 0,
//       behavior: "smooth"
//     });
// }
handleScrollHome(){
	// console.log('HOMEPAGE',this.state.homePage)
	 window.scrollTo({
         top: 0,
         behavior: "smooth"
    });

	// this.setState((prevState,props) => ({
	// 	homePage: !this.state.homePage,
		
	// 	}))
	// if (this.state.homePage === true){
	// 		return <Redirect to='/' />
	// 	}
  
}
handleScrollFeatures(){

// console.log('HOMEPAGE',this.state.homePage)
// 	this.setState((prevState,props) => ({
// 		homePage: true,
		
// 		}))

	if (this.props.location.pathname !== '/'){
			return <Redirect to='/' />
		}
	
    var element = document.getElementById("headline-style-topfeatures");
    element.scrollIntoView( {behavior: 'smooth'} );
    window.scrollTo({
    	top: element.offsetTop - 120,
    	behavior: 'smooth'
    })
    
}
handleScrollAbout(){
	// this.setState((prevState,props) => ({
	// 	homePage: !this.state.homePage,
		
	// 	}))
	// if (this.state.homePage === true){
	// 		return <Redirect to='/:homepage-about-red' />
	// 	}
	if (this.props.location.pathname !== '/'){
			return <Redirect to='/' />
		}
    var element = document.getElementById("homepage-about-red");
  element.scrollIntoView( {behavior: 'smooth'} );
 
}
// 	 handleScrollabout = e => {
//     e.preventDefault();
//     const main = this.main.current;
//     window.scrollTo({
//       top: 3600,
//       left: 0,
//       behavior: "smooth"
//     });
// }
//     handleScrollhome = e => {
//     e.preventDefault();
//     const main = this.main.current;
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth"
//     });
// }
	
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
					<li  onClick={this.handleScrollHome}><Link  to='/'>HOME</Link></li>
					<li  onClick={this.handleScrollFeatures}><Link  to='/'>FEATURES</Link></li>
					<li  onClick={this.handleScrollAbout}><Link  to='/'>ABOUT</Link></li>
					<li><Link to='/showcase'>SHOWCASE</Link></li>
				</ul>
			</div>
			<div className='hamburger'>
		          <HamburgerButton click={this.props.hamburgerToggleClickHandler}/>
		    </div>
		</nav>
	</header>

	);
	};
}
	

export default withRouter(NavBar);