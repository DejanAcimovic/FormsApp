import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm.js'
import NavBar from './Components/NavBar.js'
import CreateForm from './Components/CreateForm/CreateForm.js'
import FillForm from './Components/Form/FillForm'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchFroms from './Components/Form/SearchForm'
import FromResults from './Components/FormResults/FromResults'
import Unauthorized from './Components/Unauthorized'
import Success from './Components/Success'
import NotFound from './Components/NotFound'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={localStorage.hasOwnProperty('token')? SearchFroms : LoginForm} />
              <Route path="/form" component={CreateForm} />
              <Route path="/fill/:id" component={FillForm} />
              <Route path="/searchForms" component={SearchFroms}/>
              <Route path='/result/:id' component={FromResults}/>
              <Route path='/login' component={LoginForm}/>
              <Route path='/unauthorized' component={Unauthorized}/>
              <Route path='/success' component={Success}/>
              <Route path='*' component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
