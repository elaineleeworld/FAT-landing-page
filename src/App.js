import React, { Component } from 'react';
import a_logo from './images/a_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={a_logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FF0000 Ad Tech ( FAT ) </h1>
        </header>
        <p className="App-intro">
          Home
        </p>
        <p className="App-intro">
          Features
        </p>
        <p className="App-intro">
          Showcase
        </p>
      </div>
    );
  }
}

export default App;
