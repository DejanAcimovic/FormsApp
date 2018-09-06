import React, {Component} from 'react'
import axios from 'axios'

import { ToastContainer } from 'react-toastify'
import notify from '../notify'

import {withRouter} from 'react-router-dom'


class LoginFormFields extends Component {
  state = {
    username: null, 
    password: null
}

onUsernameChange =(e)=>{
    this.setState({username : e.target.value})
}

onPasswordChange = (e) => {
    this.setState({password : e.target.value})
}

login = () =>{
  if(this.state.username === null || this.state.password === null) {
    notify('All fields must be filled')
  }else{
    axios.post('http://localhost:5000/user/login', this.state)
    .then((res)=>{
      console.log('usao')
      localStorage.setItem('token', res.data.token)
      this.props.history.push('http://localhost:3000/searchForms')
    })
    .catch((err)=>console.log(err))
  }
}
  render(){
    return(
      <div className="card-content black-text">
        <span className="card-title">Log In</span>

        <div className="input-field ">
          <input type="text" className="validate" placeholder='Username' onChange={this.onUsernameChange}/>
        </div>
        <div className="input-field ">
          <input type="password" className="validate"placeholder='Password' onChange={this.onPasswordChange}/>
        </div>
        <div className="card-action">
              <a href="#" onClick={this.login}>Log In</a>
          </div>
          <ToastContainer/>
      </div>
    );
  }
}

export default LoginFormFields;
