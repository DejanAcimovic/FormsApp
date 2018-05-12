import React, { Component } from 'react'
import TextForm from './TextForm.js'
import SingleChoiceFormPiece from './SingleChoiceFormPiece.js'
import MultipleChoiceFormPiece from './MultipleChoiceFormPiece.js'
import NumberFormPiece from './NumberFormPiece.js'

class AddFormPiece extends Component{

  constructor(props){
    super(props)
  }

  render()
  {
    return(
      <div className="row">
        <div className='col s3'>
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(TextForm)} }>Add text input</a>
        </div>
        <div className='col s3'>
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(SingleChoiceFormPiece)}}>Add radio input</a>
        </div>
        <div className='col s3'>
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(MultipleChoiceFormPiece)}}>Add checkbox input</a>
        </div>
        <div className='col s3'>
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(NumberFormPiece)}}>Add number input</a>
        </div>
      </div>
    );
  }
}

export default AddFormPiece
