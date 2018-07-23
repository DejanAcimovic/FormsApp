import React, { Component } from 'react'
import TextForm from './TextForm.js'
import ChoiceFormPiece from './ChoiceFormPiece.js'
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
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(TextForm, 'TextForm')} }>Add text input</a>
        </div>
        <div className='col s3'>
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(ChoiceFormPiece, 'SingleChoice')}}>Add radio input</a>
        </div>
        <div className='col s3'>
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(ChoiceFormPiece, 'MultipleChoice')}}>Add checkbox input</a>
        </div>
        <div className='col s3'>
          <a className="waves-effect waves-light btn-small brown" onClick={ ()=>{this.props.addPiece(NumberFormPiece, 'NumberForm')}}>Add number input</a>
        </div>
      </div>
    );
  }
}

export default AddFormPiece
