import React, { Component } from 'react'
import AddFormPiece from './AddFormPiece.js'
import TextForm from './TextForm.js'
import ChoiceFormPiece from './ChoiceFormPiece.js'
import axios from 'axios'


class CreateForm extends Component {


  constructor(props){
    super(props)
    this.state={ form:{title : '',
                 description : '',
                 listOfStates:[]},
                 listOfPieces : []}

    this.addPiece= this.addPiece.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onPieceChange = this.onPieceChange.bind(this)
    this.setThisState = this.setThisState.bind(this)
  }

  setThisState(){
    this.setState({from : { 
                    title : this.state.form.title,
                    description : this.state.form.description,
                    listOfStates: this.state.form.listOfStates
                  },
                  listOfPieces : this.state.listOfPieces})
    console.log(this.state)
  }

  addPiece(piece, tip){

    this.state.listOfPieces.push(piece)
    this.state.form.listOfStates.push({type:tip})
    this.setThisState();
  }

  onPieceChange(stateOfPiece){
    console.log('pozvala se promjena dijela')
    this.state.form.listOfStates[stateOfPiece.key] = stateOfPiece; 
    this.setThisState();
  }

  onTitleChange(){
    this.state.form.title = this.refs.titleRef.value
    this.setThisState() ;
    console.log(this.state)
  }

  onDescriptionChange(){
    this.state.form.description = this.refs.descriptionRef.value
    this.setThisState();
    console.log(this.state)
  }

  createPool()
  {
    axios.post('http://localhost:5000', this.state.form).then((res)=>{
      alert(res); 
    })
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
              return (
                <div><FormPiece key={index} keyy = {index} onChange={this.onPieceChange} type={this.state.form.listOfStates[index].type}/><br/></div>)
              }) }
              <AddFormPiece addPiece = {this.addPiece} onPieceChange={this.onPieceChange} />
            </div>
            <div className="card-action">
              <a href="#" onClick={this.createPool}>Create poll</a>
            </div>
          </div>
        </div>
    );
  }
}

export default CreateForm
