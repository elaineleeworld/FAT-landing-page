import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js';
import Features from './Features.js';
import Showcase from './Showcase.js';


class Main extends Component {
	render(){
		return(
			<main>
			    <Switch>
			      <Route exact path='/' component={Home}/>
			      <Route path='/features' component={Features}/>
			      <Route path='/showcase' component={Showcase}/>
			    </Switch>
			</main>
			)
	}
}

export default Main;