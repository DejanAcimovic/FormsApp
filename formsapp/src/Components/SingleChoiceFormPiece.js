import React, { Component } from 'react'

class SingleChoiceFormPiece extends Component{

  constructor(props){
    super(props)
    this.state={key: this.props.key,
                type: 'SingleChoice',
                question:'',
                choices:[]}

    this.setThisState = this.setThisState.bind(this)
    this.addChoice = this.addChoice.bind(this)
    this.choiceNameChanged = this.choiceNameChanged.bind(this)
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
    this.state.choices = [...this.state.choices, { id: this.state.choices.length, name: '' }]
    this.setThisState()
  }

  choiceNameChanged(choice, text){
    this.state.choices[choice.id].name  = text
    this.setThisState()
  }

  render()
  {
    return(
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" />
            <label htmlFor="TextFormName">Type your question</label>
          </div>
        </div>
        <form action="#">
          {this.state.choices.map((choice, index)=>{
            return(

                <label>
                  <input name="group1" type="radio" disabled="disabled"/>
                  <span>
                    <input key={index.toString()} type="text" className="validate white-text"/>
                    <label htmlFor='TextFormName1'>Type your choice</label>
                  </span>
                </label>

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

export default SingleChoiceFormPiece
