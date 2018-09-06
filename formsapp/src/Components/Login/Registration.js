import React, {Component} from 'react'
import axios from 'axios'

import { ToastContainer } from 'react-toastify'
import notify from '../notify'

class Registration extends Component {
    state = {
        username: null, 
        password: null, 
        repeatPassword: null
    }

    onUsernameChange =(e)=>{
        this.setState({username : e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({password : e.target.value})
    }

    onRepeatPasswordChange = (e) => {
        this.setState({repeatPassword : e.target.value})
    }

    register = () => {
        if(this.state.username === null || this.state.password === null || this.state.repeatPassword === null){
            notify('All fields must be filled')
        }else if(this.state.password !== this.state.repeatPassword){
            notify('Passwords do not match')
        }else{
            axios.post('http://localhost:5000/user/register', this.state)
            .then((res)=>{
                console.log(res)
            })
            .catch( (err)=>{
                console.log(err)
            }
            )
        }
    }

  render(){
    return(
      <div className="card-content black-text">
        <span className="card-title">Register</span>

        <div className="input-field ">
          <input type="text" className="validate" placeholder='Username' onChange={this.onUsernameChange}/>
        </div>
        <div className="input-field ">
          <input type="password" className="validate" placeholder='Password' onChange={this.onPasswordChange}/>
        </div>
        <div className="input-field ">
          <input type="password" className="validate" placeholder='Repeat Password' onChange={this.onRepeatPasswordChange}/>
        </div>
        <div className="card-action">
              <a href="#" onClick={this.register}>CREATE ACCOUNT</a>
          </div>
          <ToastContainer></ToastContainer>
      </div>
    );
  }
}

export default Registration;
