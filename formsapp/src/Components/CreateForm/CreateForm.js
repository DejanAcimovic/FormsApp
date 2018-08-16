import React, { Component } from 'react'
import AddFormPiece from './AddFormPiece.js'
import TextForm from './TextForm.js'
import ChoiceFormPiece from './ChoiceFormPiece.js'
import Question from './Question';

import axios from 'axios'
import AddQuestion from './AddQuestion.js';


class CreateForm extends Component {


  state={    
    title : '',
    description : '',
    questions:[{question:'alksdjf', payload:{type:'text'}},{question:'alksdjf', payload:{type:'number',min:0,max:10}},{question:'alksdjf', payload:{type:'singleChoice',choices:['bla',';bla']}},{question:'alksdjf', payload:{type:'singleChoice',choices:['bla',';bla']}},{question:'alksdjf', payload:{type:'multipleChoice',choices:['bla',';bla']}}]
  }

  addPiece = (piece, type) => {
    this.setState((prevState, props) => 
    ({ 
      listOfStates : [...prevState.listOfStates, type],
      listOfPieces: [...prevState.listOfPieces, piece]
    }));
  }

  onPieceChange = (stateOfPiece) => {
      var element = this.state.listOfStates[stateOfPiece.key] 
      element = stateOfPiece
      this.forceUpdate();
  }

  onTitleChange = (e) => {
    e.persist()
    this.setState((prevState, props) => {
      var form = {...this.state.form}
      form.title = e.target.value
      return {form}
    })
  }

  onDescriptionChange = (e) => {
    e.persist();
    this.setState((prevState, props) => {
      var form = {...this.state.form}
      form.description = e.target.value
      return {form}
    })
  }

  createPool = () => {
    axios.post('http://localhost:5000/createForm', this.state).then((res)=>{
      alert(res); 
    }) 
  }

  render(){

    return(
      <div className='container'>
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                <h1> Forms Creator</h1>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="FormName" type="text" className="validate white-text" onChange={this.onTitleChange}/>
                      <label htmlFor="FormName">Name of form</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="FormDescription" type="text" className="materialize-textarea white-text" onChange={this.onDescriptionChange} />
                      <label htmlFor="FormDescription">Descrioption of form</label>
                    </div>
                  </div>
              </span>
              {
                this.state.questions.map((question, index)=>(<Question {...question} index={index}/>))
              }
              <AddQuestion/>
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
