import React, { Component } from 'react'

class AddFormPiece extends Component{

  constructor(props){
    super(props)
  }
  render()
  {
    return(
      <div>
        <a className="btn-floating btn-large waves-effect waves-light amber darken-3 ">
          <i className="material-icons" onClick={this.props.addPiece}>add</i>
        </a>
      </div>
    );
  }
}

export default AddFormPiece
