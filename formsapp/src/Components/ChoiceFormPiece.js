import React, { Component } from 'react'

class Choice extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      key: this.props.keyy,
      question:''
    }

    this.onQuestionChange = this.onQuestionChange.bind(this)
  }

  onQuestionChange(){

    this.state.question = this.refs.question.value

    this.setState({
      key : this.state.key,
      question : this.state.question
    })
    this.props.onChange(this.state)
  }

  render()
  {
    return(
      <label>
        <input name="group1" type={(this.props.type ==='SingleChoice') ? 'radio' : 'checkbox'} disabled="disabled"/>
        <span>
          <input type="text" className="validate white-text" onBlur={this.onQuestionChange} ref='question'/>
          <label htmlFor='TextFormName1'>Type your choice</label>
        </span>
      </label>
    )
  }
}

class ChoiceFormPiece extends Component{

  constructor(props){
    super(props)
    this.state={key: this.props.keyy,
                type: this.props.type,
                question:'',
                choices:[]
                }

    this.setThisState = this.setThisState.bind(this)
    this.addChoice = this.addChoice.bind(this)
    this.choiceNameChanged = this.choiceNameChanged.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  setThisState(){
    this.setState({
      key: this.state.key,
      type : this.state.type,
      question: this.state.question, 
      choices: this.state.choices
    })

    this.props.onChange(this.state)
  }

  addChoice(){
    this.state.choices = [...this.state.choices, { name: '' }]
    this.setThisState()
  }

  choiceNameChanged(){
    this.state.choices.name  =this.refs.question
    this.setThisState()
  }

  onChange(arg){
    this.state.choices[arg.key].name = arg.question
    this.setThisState()
  }

  render()
  {
    return(
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" onBlur={this.choiceNameChanged} ref='question' />
            <label htmlFor="TextFormName">Type your question</label>
          </div>
        </div>
        <form action="#">
          {this.state.choices.map((choice, index)=>{
            return(

               <Choice key={index} keyy={index} type={this.state.type} onChange={this.onChange} />

            );
          })}
          <a className="btn-floating btn-small waves-effect waves-light red darken-3 right">
            <i className="material-icons" onClick={this.addChoice}>add</i>
          </a>
        </form>

      </div>
    );
  }
}

export default ChoiceFormPiece
