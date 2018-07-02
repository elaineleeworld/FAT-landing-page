import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import DownloadButton from './components/DownloadButton.js';
import Header from './components/Header.js';
import Main from './components/Main.js';



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
