import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm.js'
import NavBar from './Components/NavBar.js'
import CreateForm from './Components/CreateForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="App-intro">
          <CreateForm  />
        </p>
      </div>
    );
  }
}

export default App;
