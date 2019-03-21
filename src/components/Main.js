import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home.js'
import Showcase from '../pages/Showcase.js'

class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home} onUpate={() => window.scrollTo(0, 0)} />
					<Route path="/showcase" component={Showcase} onUpate={() => window.scrollTo(0, 0)} />
				</Switch>
			</main>
		)
	}
}

export default Main
