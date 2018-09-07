import React, { Component } from 'react'
import Question from './Question'
import axios from 'axios'
import AddQuestion from './AddQuestion.js'
import { ToastContainer } from 'react-toastify'
import notify from '../notify'

const deletable = (SomeComponent,props, onDelete) => {
    return (
      <div className='container' >
        <a class="btn-floating btn-small waves-effect waves-light red darken-4 right" style={{margin : "7px"} } ><i className="material-icons" onClick={onDelete} >delete</i></a> 
        <SomeComponent {...props}/>
        <br/>
      </div>
    )
}

class CreateForm extends Component {

  state={    
    title : '',
    description : '',
    questions:[]
  }

  addQuestion = (question) =>{
    this.setState((prevState, props) => 
    ({ 
      questions : [...prevState.questions, question]
    }));
  }

  onTitleChange = (e) => {
    this.setState({title : e.target.value})
  }

  onDescriptionChange = (e) => {
    this.setState({description : e.target.value})
  }

  onQuestionDelete = (index) => {
    const questions = this.state.questions.filter((element,elementIndex)=>{
      return elementIndex!=index;
    })
    this.setState({questions});
  }

  createPool = () => {

    if(this.state.questions.length == 0){
      notify('You must have at least one question!')
    }else if(this.state.title == ''){
      notify('Title field can not be left empty!')
    }else if(this.state.description == '' ){
      notify('Description field can not be left empty!')
    }else{
      let form = {
        title: this.state.title,
        creator_id: 1,//ovo je privremeno
        description: this.state.description, 
        questions: this.state.questions
      }
      let token = undefined
        if(localStorage.hasOwnProperty('token')){
            token = 'Bearer ' + localStorage.getItem('token')
        }
      axios.post('http://localhost:5000/form/createForm', form, { headers: { Authorization: token } }).then((res)=>{
        notify('Success'); 
      }).catch(function (error) {
        if(error.response.status == 403 ){
          window.location.href = '/unauthorized'
        }else{
          notify(error.message)
        }
      });
    }

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
                      <label htmlFor="FormName">Title of form</label>
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
                this.state.questions.map(
                (question,index)=>{
                  const DeletableQuestion = deletable(Question,{...question,index:index,disabled:true},()=>{this.onQuestionDelete(index)})
                  return DeletableQuestion;
                }
                
                )
              }
              <AddQuestion addQuestion={this.addQuestion}/>
            </div>
            <div className="card-action">
              <a class="btn-large waves-effect waves-light yellow darken-4 center center" onClick={this.createPool}>CREATE FORM</a>
            </div>
          </div>
          <ToastContainer />
        </div>
    );
  }
}

export default CreateForm
