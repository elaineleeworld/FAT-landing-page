import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main.js';
import Footer from './components/Footer/Footer.js';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
