import React from 'react';



const NavBar = () => {
    return (
      <nav>
        <div className="nav-wrapper brown">
          <a href={localStorage.hasOwnProperty('token')? "/searchForms" : '/login'} className="brand-logo center">Forms App</a>
          {localStorage.hasOwnProperty('token')&&
            <div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#" onClick={()=>{localStorage.removeItem('token')}}>Log Out</a></li>
              </ul>
            </div>
          }
        </div>
      </nav>
    )
}

export default NavBar
