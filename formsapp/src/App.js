import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm.js'
import NavBar from './Components/NavBar.js'
import CreateForm from './Components/CreateForm/CreateForm.js'
import FillForm from './Components/Form/FillForm'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchFroms from './Components/Form/SearchForm'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
              <Route path="/form" component={CreateForm} />
              <Route path="/fill/:id" component={FillForm} />
              <Route path="/searchForms" component={SearchFroms}/>
              
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
