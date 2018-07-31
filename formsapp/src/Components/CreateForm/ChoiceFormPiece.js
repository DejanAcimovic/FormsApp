import React, { Component } from 'react'
import Choice from './Choice.js'

class ChoiceFormPiece extends Component{

  constructor(props){
    super(props)
    this.state={key: this.props.keyy,
                type: this.props.type,
                question:'',
                choices:[]
                }
                console.log(this.props.type)
  }

  addChoice = () => {
    this.setState({choices : [...this.state.choices, { name: '' }]}, () => this.props.onChange(this.state))
  }

  questionChanged = (e) => {
    this.setState({question : e.target.value}, () => this.props.onChange(this.state))
  }

  onChange = (arg) => {
    let choice = this.state.choices[arg.key].name 
    choice = arg.question
    this.forceUpdate();
    this.props.onChange(this.state)
  }

  render()
  {
    return(
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" onChange={this.questionChanged}/>
            <label htmlFor="TextFormName">Type your question</label>
          </div>
        </div>
        <form action="#">
          {this.state.choices.map((choice, index)=>{
            return(
               <Choice key={index} keyy={index} type={this.props.type} onChange={this.onChange} />

            );
          })}
          <br/>
          <a className="btn-floating btn-small waves-effect waves-light red darken-3 right">
            <i className="material-icons" onClick={this.addChoice}>add</i>
          </a>
          
        </form>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default ChoiceFormPiece
