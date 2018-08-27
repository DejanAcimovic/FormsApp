import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm.js'
import NavBar from './Components/NavBar.js'
import CreateForm from './Components/CreateForm/CreateForm.js'
import FillForm from './Components/Form/FillForm'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
              <Route path="/form" component={CreateForm} />
              <Route path="/:id" component={FillForm} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
