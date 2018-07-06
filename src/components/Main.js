import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home.js';
import Features from '../pages/Features.js';
import Showcase from '../pages/Showcase.js';


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