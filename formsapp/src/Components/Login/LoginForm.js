import React, { Component } from 'react';
import LoginFormFields from './LoginFormFields.js'
import Registration from './Registration'


let LoginForm = ()=>(
      <div className="row">
      <br/>
      <br/>
        <div className="col s4 offset-m2">
          <div className="card white">
            <LoginFormFields />
          </div>
        </div>
        <div className="col s4 ">
        <div className="card white">
            <Registration/>
          </div>
        </div>
      </div>
)

export default LoginForm
