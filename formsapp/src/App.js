import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm.js'
import NavBar from './Components/NavBar.js'
import CreateForm from './Components/CreateForm/CreateForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

          <CreateForm  />

      </div>
    );
  }
}

export default App;
