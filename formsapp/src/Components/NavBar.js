import React, { Component } from 'react';



class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue">
          <a href="#" className="brand-logo center">Forms App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;