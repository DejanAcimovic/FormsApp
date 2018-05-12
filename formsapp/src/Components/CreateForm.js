import React, { Component } from 'react'
import AddFormPiece from './AddFormPiece.js'
import TextForm from './TextForm.js'
import SingleChoiceFormPiece from './SingleChoiceFormPiece.js'


class CreateForm extends Component {


  constructor(props){
    super(props)
    this.state={ title : '',
                 description : '',
                 listOfPieces : []}
    this.addPiece= this.addPiece.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onPieceChange = this.onPieceChange.bind(this)
  }

  addPiece(piece){

    this.state.listOfPieces.push(piece)
    this.setState({title : this.state.title,
                 description : this.state.description,
                 listOfPieces : this.state.listOfPieces})
  }

  onPieceChange(stateOfPiece){

  }

  onTitleChange(){
    this.setState({title : this.refs.titleRef.value,
                 description : this.state.description,
                 listOfPieces : this.state.listOfPieces})
    console.log(this.state)
  }

  onDescriptionChange(){
    this.setState({title : this.state.title,
                 description : this.refs.descriptionRef.value,
                 listOfPieces : this.state.listOfPieces})
    console.log(this.state)
  }


  render(){

    return(
      <div className='container'>
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                <h1> Froms Creator</h1>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="FormName" type="text" className="validate white-text" ref="titleRef" onBlur={this.onTitleChange}/>
                      <label htmlFor="FormName">Name of form</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="FormDescription" type="text" className="materialize-textarea white-text"ref="descriptionRef" onBlur={this.onDescriptionChange} />
                      <label htmlFor="FormDescription">Descrioption of form</label>
                    </div>
                  </div>
              </span>
              {this.state.listOfPieces.map( (FormPiece, index) => {
                return (<div><FormPiece key={index}/><br/></div>)
              }) }
              <AddFormPiece addPiece = {this.addPiece} onPieceChange={this.onPieceChange} />
            </div>
            <div className="card-action">
              <a href="#">Create poll</a>
            </div>
          </div>
        </div>
    );
  }
}

export default CreateForm
