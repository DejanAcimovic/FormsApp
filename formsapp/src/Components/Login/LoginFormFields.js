import React, {Component} from 'react'

class LoginFormFields extends Component {
  render(){
    return(
      <div className="card-content black-text">
        <span className="card-title">Log In</span>

        <div className="input-field ">
          <input id="icon_prefix" type="text" className="validate"/>
          <label for="icon_prefix">Username</label>
        </div>
        <div className="input-field ">
          <input id="password" type="password" className="validate"/>
          <label for="password">Password</label>
        </div>

      </div>
    );
  }
}

export default LoginFormFields;
