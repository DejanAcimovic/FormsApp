import React, { Component } from 'react'
import AddFormPiece from './AddFormPiece.js'
import TextForm from './TextForm.js'


class CreateForm extends Component {


  constructor(props){
    super(props)
    this.state={ listOfPieces : []}
    this.addPiece= this.addPiece.bind(this)
  }

  addPiece(){

    this.state.listOfPieces.push(TextForm)
    this.setState({listOfPieces: this.state.listOfPieces})
    console.log(this.state.listOfPieces);
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
                      <input id="FormName" type="text" className="validate white-text" />
                      <label for="FormName">Name of form</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="FormDescription" type="text" className="materialize-textarea white-text" />
                      <label for="FormDescription">Descrioption of form</label>
                    </div>
                  </div>
              </span>
              {this.state.listOfPieces.map( (FormPiece) => {
                return <TextForm />
              }) }
              <AddFormPiece addPiece = {this.addPiece} />
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
