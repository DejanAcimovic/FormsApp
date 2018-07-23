import React, { Component } from 'react';
import LoginFormFields from './LoginFormFields.js'


class LoginForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s4 offset-m4">
          <div className="card white">
            <LoginFormFields />
            <div className="card-action">
              <a href="#">Log In</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
