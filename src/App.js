import React, { Component } from 'react'
import './styles/App.css'
import NavBar from './components/NavBar/NavBar.js'
import Main from './components/Main.js'
import Footer from './components/Footer/Footer.js'
import MobileOverlay from './components/Hamburger/MobileOverlay.js'

class App extends Component {
	state = {
		mobileOverlayOpen: false
	}

	hamburgerToggleClickHandler = () => {
		this.setState(prevState => {
			return { mobileOverlayOpen: !prevState.mobileOverlayOpen }
		})
	}

	mobileOverlayClickHandler = () => {
		this.setState({ mobileOverlayOpen: false })
	}
	render() {
		let mobileOverlay

		if (this.state.mobileOverlayOpen) {
			mobileOverlay = <MobileOverlay click={this.mobileOverlayClickHandler} />
		}
		return (
			<div style={{ height: '100%' }}>
				<NavBar hamburgerToggleClickHandler={this.hamburgerToggleClickHandler} />
				{mobileOverlay}
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App
