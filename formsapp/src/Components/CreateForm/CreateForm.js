import React, { Component } from 'react'
import Question from './Question';
import axios from 'axios'
import AddQuestion from './AddQuestion.js';


const deletable = (SomeComponent,props, onDelete) => {
    return (
      <div>
        <a class="btn-floating btn-small waves-effect waves-light red darken-4 right"><i className="material-icons" onClick={onDelete} >delete</i></a>
        <SomeComponent {...props}/>
        <br/>
      </div>
    )
}

class CreateForm extends Component {


  state={    
    title : '',
    description : '',
    questions:[{question:'alksdjf', payload:{type:'text'}},{question:'alksdjf', payload:{type:'number',min:0,max:10}},{question:'alksdjf', payload:{type:'singleChoice',choices:['bla',';bla']}},{question:'alksdjf', payload:{type:'singleChoice',choices:['bla',';bla']}},{question:'alksdjf', payload:{type:'multipleChoice',choices:['bla',';bla']}}]
  }

  addQuestion = (question) =>{
    this.setState((prevState, props) => 
    ({ 
      questions : [...prevState.questions, question]
    }));
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

  onQuestionDelete = (index) => {
    const questions = this.state.questions.filter((element,elementIndex)=>{
      return elementIndex!=index;
    })
    this.setState({questions});
  }

  createPool = () => {
    axios.post('http://localhost:5000/createForm', this.state.questions).then((res)=>{
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
                this.state.questions.map(
                  
                  //(question, index)=>(<Question {...question} index={index} disabled={true}/>)
                (question,index)=>{
                  const DeletableQuestion = deletable(Question,{...question,index:index,disabled:true},()=>{this.onQuestionDelete(index)})
                  return DeletableQuestion;
                }
                
                )
              }
              <AddQuestion addQuestion={this.addQuestion}/>
            </div>
            <div className="card-action">
              <a class="btn-large waves-effect waves-light yellow darken-4 center center">CREATE POOL</a>
            </div>
          </div>
        </div>
    );
  }
}

export default CreateForm
